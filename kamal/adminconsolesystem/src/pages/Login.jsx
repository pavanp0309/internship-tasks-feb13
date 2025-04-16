import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login and redirect
    // Ideally, you'd set isLoggedIn via context or global state
    navigate('/console/projects');
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Login Page</h2>
      <button className="btn btn-success mt-3" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;