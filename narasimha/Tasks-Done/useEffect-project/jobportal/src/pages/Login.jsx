import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); 
    navigate('/findjobs'); 
  };

  return (
    <div className="main w-100 h-100">
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: '100vh', fontFamily: 'cursive' }}
      >
        <div className="card p-5 shadow-lg my-5 rounded-4" style={{ width: '600px', height: '500px' }}>
          <h2 className="text-center fw-bold">Sign in</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label mx-2 fs-6">Email address</label>
              <input type="email" className="form-control p-3" placeholder="Enter Email" />
            </div>
            <div className="mb-3">
              <label className="form-label mx-2 fs-6">Password</label>
              <input type="password" className="form-control p-3" placeholder="Enter password" />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary p-3 fw-semibold" type="submit">
                Submit
              </button>
            </div>
          </form>
          <p className="my-4 text-muted text-center">
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
