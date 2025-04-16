import React from 'react';
import { Navigate } from 'react-router-dom';

const isLoggedIn = true; // simulate login status

const PrivateRoute = ({ children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;