import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const ConsoleLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => navigate('/login');

  return (
    <div className="d-flex">
      <div className="bg-light p-3" style={{ minWidth: '200px' }}>
        <h4 className='text-success'>Admin Console</h4>
        <nav className="nav flex-column">
          <NavLink to="projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
          <NavLink to="billing" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Billing</NavLink>
          <NavLink to="activity" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Activity</NavLink>
        </nav>
        <button className="btn btn-danger btn-sm mt-3" onClick={handleLogout}>Logout</button>
      </div>
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ConsoleLayout;
