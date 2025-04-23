import React from 'react';
import { Navigate } from 'react-router-dom';
import authStatus from '../auth';

const PrivateRoute = ({ children }) => {
  return authStatus.isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
