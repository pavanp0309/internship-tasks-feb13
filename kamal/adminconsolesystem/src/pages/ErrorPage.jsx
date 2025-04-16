import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="text-center p-5">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="login" className="btn btn-primary mt-3">Go to Login Page</Link>
    </div>
  );
};

export default ErrorPage;
