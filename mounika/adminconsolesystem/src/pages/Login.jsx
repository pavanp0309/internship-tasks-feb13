import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/console');

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Login Page</h2>
      <button className="btn btn-primary" onClick={handleLogin}>Simulate Login</button>
    </div>
  );
};

export default Login;