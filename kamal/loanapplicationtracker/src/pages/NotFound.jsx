import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <Link to="/login" className="btn btn-primary">Back to Login</Link>
    </div>
  );
};

export default NotFound;
