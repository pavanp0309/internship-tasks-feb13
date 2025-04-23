import React from 'react';
import { useNavigate } from 'react-router-dom';
import authStatus from '../auth';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    authStatus.isLoggedIn = true;
    navigate('/dashboard/applications');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <form className="card p-4 shadow w-100" style={{ maxWidth: '400px' }} onSubmit={handleLogin}>
        <h3 className="text-center mb-3">Admin Login</h3>
        <input type="text" placeholder="Username" className="form-control mb-3" required />
        <input type="password" placeholder="Password" className="form-control mb-3" required />
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
