
import React from 'react';
import { Navigate } from 'react-router-dom';

const EmployeeProtectedRoute = ({ children }) => {
  const empLogin = localStorage.getItem('empLogin') === 'true';

  if (!empLogin) {
    return <Navigate to="/employeelogin" replace />;
  }

  return children;
};

export default EmployeeProtectedRoute;
