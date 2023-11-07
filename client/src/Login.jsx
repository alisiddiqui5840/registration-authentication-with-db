import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email,password})
        .then(result => {
            
            console.log(result)
            if (result.data.message === 'success') {
                // Retrieve the total amount from local storage
                const totalAmount = localStorage.getItem('totalAmount');
                localStorage.setItem('userId', result.data.userId);
                localStorage.setItem('username', result.data.username);
                
                // Send the total amount to the server
                axios.post('http://localhost:3001/saveTotalAmount', { email, totalAmount })
                  .then(response => {
                    console.log(response);
                   
                    navigate('/Checkout');
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }
            })
            .catch(err => console.log(err));
        };
        
        
        
      
    return( 
 
     
        <div className="d-flex justify-content-center align-items-center bg-warning vh-100">
        <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
        <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="text"
                        placeholder="Enter Name"
                        autoComplete="off"
                        name="email"
                        required
                        className="form-control rounded-0"
                        onChange= {(e)=> setEmail(e.target.value)} />
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        required
                        className="form-control rounded-0"
                        onChange= {(e)=> setPassword(e.target.value)} />
                         
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                    </form>
                    <p>Don't Have Account</p>
                    <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Register</Link>

              

            </div>
        </div>
        
    )
}
export default Login;