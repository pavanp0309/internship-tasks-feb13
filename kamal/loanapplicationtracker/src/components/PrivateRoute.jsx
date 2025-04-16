// src/components/PrivateRouter.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRouter;
