import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [userData, setUserData] = useState([]);
  const [totalPurchases, setTotalPurchases] = useState(null);

  useEffect(() => {
    // Make a GET request to fetch user data
    axios.get('http://localhost:3001/getUserData')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Make a GET request to fetch total purchases
    axios.get('http://localhost:3001/getTotalPurchaseAmount')
      .then((response) => {
        setTotalPurchases(response.data.totalPurchaseAmount);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="admin-panel-container" style={{ background: '#34495E' }}>
      <div className="card">
      <div className="bg-black text-white card-header d-flex justify-content-between">
  <h1 className="card-title" style={{ fontFamily: 'cursive' }}>Admin Panel</h1>
  <a href="/" style={{ fontSize: '42px', textDecoration: 'none', color: 'white' }}>Home</a>
</div>
        <div className="card-body" style={{ background: '#34495E' }}>
          <div className="row">
          <div className="col-md-4">
              <div className="bg-red text-black p-3 rounded" style={{ backgroundColor: '#FADBD8' }}>
                <h5 className="card-subtitle" style={{ fontFamily: 'cursive' }}>Total Users</h5>
                <p className="card-text" style={{ fontFamily: 'cursive' }}>{userData.length}</p>
              </div>
            </div>
          <div className="col-md-4">
  <div className="bg-red text-black p-3 rounded" style={{ backgroundColor: '#EBDEF0' }}>
    <h5 className="card-subtitle" style={{ fontFamily: 'cursive' }}>Total Purchases</h5>
    <p className="card-text" style={{ fontFamily: 'cursive' }}>{totalPurchases || 'N/A'}</p>
  </div>
</div>

          </div>
          <div className="mt-4">
            <div className="bg-danger text-white p-3 rounded">
              <h5 className="card-subtitle" style={{ fontFamily: 'cursive' }}>Customer Order Placed</h5>
            </div>
            <table className="table table-striped table-condensed mt-3 mx-auto" style={{ width: '80%' }}>
  <thead>
    <tr>
      <th>Order ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Order Amount</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {userData.map((user) => (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.totalAmount || 'N/A'}</td>
        <td>
          <button className="btn btn-primary">Process Order</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
