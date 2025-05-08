import React from "react";
import { Navigate } from "react-router-dom";

const EmpPrivateRoute = ({ children }) => {
  const isEmployerLoggedIn = localStorage.getItem("isEmployerLoggedIn") === "true";
  return isEmployerLoggedIn ? children : <Navigate to="/employersignin" replace />;
};

export default EmpPrivateRoute;
