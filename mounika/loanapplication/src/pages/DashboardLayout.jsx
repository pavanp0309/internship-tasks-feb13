import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import authStatus from '../auth';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const logout = () => {
    authStatus.isLoggedIn = false;
    navigate('/login');
  };

  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <nav className="col-md-3 col-lg-2 bg-dark text-white d-flex flex-column p-3 min-vh-100">
          <h4 className="text-center">Admin Panel</h4>
          <NavLink to="applications" className="btn btn-outline-light my-1">Applications</NavLink>
          <NavLink to="settings" className="btn btn-outline-light my-1">Settings</NavLink>
          <button onClick={logout} className="btn btn-danger mt-auto">Logout</button>
        </nav>
        <main className="col-md-9 col-lg-10 p-4 bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
}