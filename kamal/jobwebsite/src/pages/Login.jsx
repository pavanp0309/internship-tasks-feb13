import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  // Redirect immediately if already logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username); // Store the username in localStorage
    navigate("/");
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="card shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body p-4">
          <h3 className="text-center mb-4" style={{ color: "#0056b3", fontFamily: "Montserrat, sans-serif" }}>
            Login
          </h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-0 rounded-pill shadow-sm py-3"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Store username in state
                style={{ backgroundColor: "#e9f2ff" }}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control border-0 rounded-pill shadow-sm py-3"
                placeholder="Password"
                required
                style={{ backgroundColor: "#e9f2ff" }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 rounded-pill py-3 shadow-sm"
              style={{ fontSize: "1.1rem", fontWeight: "500", backgroundColor: "#0056b3" }}
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
          <div className="text-center mt-3">
            <p className="text-muted">
              Don't have an account? <a href="#" style={{ textDecoration: "none", color: "#0056b3" }}>Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
