import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'



function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Clear any previous error messages
      setNameError('');
      setEmailError('');
      setPasswordError('');
  
      if (name.trim() === '') {
        setNameError('Name is required');
        return;
      }
  
      // Simple email format validation
      if (!email.includes('@')) {
        setEmailError('Invalid email format');
        return;
      }
  
      if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters long');
        return;
      }
  
      try {
        // Make a POST request to your registration endpoint
        const response = await axios.post('http://localhost:3001/register', { name, email, password });
  
        console.log(response.data); // Assuming the server responds with relevant data
  
        // Redirect to the login page upon successful registration
        // You need to set up your routing properly for this to work
        navigate('/Checkout');
      } catch (error) {
        console.log(error);
        // Handle registration error, display a message to the user, etc.
      }
    };
  
    return (
      <div className="d-flex justify-content-center align-items-center bg-warning vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                required
                name="name"
                className="form-control rounded-0"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <div className="text-danger">{nameError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email" 
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                required
                className="form-control rounded-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="text-danger">{emailError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                required
                className="form-control rounded-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className="text-danger">{passwordError}</div>}
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
          </form>
          <p>Already Have an Account?</p>
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
        </div>
      </div>
    );
  }
  
  export default Signup;