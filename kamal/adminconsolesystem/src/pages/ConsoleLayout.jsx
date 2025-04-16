import React from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';

const ConsoleLayout = () => {
  const navigate = useNavigate();  
  // useNavigate allows us to navigate to different pages based on the path

  const handleLogout = () => {
    // Simulate logout
    navigate('/login');
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light p-3 vh-100" style={{ width: '200px' }}>
        <h5>Console</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="projects">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="billing">Billing</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="activity">Activity</NavLink>
          </li>
        </ul>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 p-4">
        <Outlet />   {/*this data coming from nested paths under console -> /console/projects → loads ConsoleLayout + injects ProjectList into <Outlet /> ; by default it will render console and project list because in login function you gave console/projects*/}
      </div>
    </div>
  );
};

export default ConsoleLayout;