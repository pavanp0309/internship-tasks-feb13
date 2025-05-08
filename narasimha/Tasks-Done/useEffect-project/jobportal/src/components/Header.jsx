import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = ({ onLogout, isLogin }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <NavLink className="navbar-brand fs-1" to="/">
          <strong className="text-primary fw-bold">
            <i className="bi bi-gear-fill"></i>
          </strong>
          <strong>JobsFactory</strong>
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${toggle ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4 fw-bold" style={{ fontFamily: 'revert' }}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/findjobs">FIND JOBS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/contact">CONTACT</NavLink>
            </li>
          </ul>

          {!isLogin && (
            <NavLink className='btn btn-success fw-bold mx-3' to="/employeelogin">
              EMPLOYER
            </NavLink>
          )}

          {isLogin ? (
            <button className="btn btn-primary fw-bold mx-3 " onClick={handleLogout}>
              LOG OUT
            </button>
          ) : (
            <NavLink to="/login" className="btn btn-danger fw-bold">
              LOGIN / REGISTER
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
