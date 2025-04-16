import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div
        className="bg-light border-end"
        style={{
          width: isSidebarOpen ? "220px" : "0",
          overflow: "hidden",
          transition: "width 0.3s",
        }}
      >
        {isSidebarOpen && (
          <div className="p-3">
            <h5>Loan Tracker</h5>
            <ul className="nav flex-column mt-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="applications">Applications</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="settings">Settings</NavLink>
              </li>
            </ul>
            <button className="btn btn-danger mt-4" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Top Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-3">
          <button className="btn btn-outline-secondary me-3" onClick={toggleSidebar}>
            ☰
          </button>
          <span className="navbar-brand fw-bold me-4">Loan Tracker</span>

          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <span className="ms-auto fw-semibold">Welcome, Kamal</span>
        </nav>

        {/* Page Content */}
        <div className="p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
