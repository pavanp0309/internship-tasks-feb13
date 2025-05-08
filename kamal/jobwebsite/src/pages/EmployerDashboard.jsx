import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaUserTie, FaPlusCircle, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EmployerDashboard = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleLogout = () => {
      const confirmed = window.confirm("Are you sure you want to log out?");
      if (confirmed) {
        localStorage.removeItem("isEmployerLoggedIn");
        localStorage.removeItem("employerName");
        navigate("/"); // Redirect to Home
      }
    };
    

  const handleMouseEnter = (e) => {
    e.target.style.color = '#00bfff';
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#ffffff';
    e.target.style.backgroundColor = 'transparent';
  };

  const linkStyle = {
    fontSize: '1.1rem',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'all 0.2s ease-in-out',
  };

  // Get the employer name from localStorage
const employerName = localStorage.getItem("employerName");

  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <div className="bg-primary text-white p-4" style={{ width: '250px' }}>
        {/* Logo */}
        <div className="mb-4 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Logo"
            style={{ width: '60px' }}
            className="mb-2"
          />
           {/* Display employer name here */}
        <h5 className="fw-bold">{employerName}</h5>
        </div>

        {/* Navigation */}
        <nav className="nav flex-column">
          <NavLink
            to="profile"
            className="nav-link text-white mb-2"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaUserTie className="me-2" />
            Profile
          </NavLink>

          <NavLink
            to="posted-jobs"
            className="nav-link text-white mb-2"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaClipboardList className="me-2" />
            Posted Jobs
          </NavLink>

          <NavLink
            to="create-job"
            className="nav-link text-white mb-2"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaPlusCircle className="me-2" />
            Create Job
          </NavLink>

          <button
            to="settings"
            className="nav-link text-white mb-2 text-start border-0 bg-transparent"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaCog className="me-2" />
            Settings
          </button>

          <button
  onClick={handleLogout}
  className="nav-link text-white mt-4 text-start border-0 bg-transparent"
  style={linkStyle}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <FaSignOutAlt className="me-2" />
  Logout
</button>

        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-grow-1 p-4 bg-light">
        <Outlet />
      </div>
    </div>
  );
};

export default EmployerDashboard;
