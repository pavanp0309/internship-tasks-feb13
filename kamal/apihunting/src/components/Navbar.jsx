import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg px-4" style={{ backgroundColor: '#1c1f4a' }}>
      <NavLink
  className="navbar-brand fw-bold d-flex align-items-center gap-2"
  to="/"
  style={{
    fontSize: '2.2rem',
    color: '#00bfff',
    fontFamily: 'Rajdhani, sans-serif',
    letterSpacing: '1px'
  }}
>
  <img
    src="https://images-platform.99static.com/X9dmiuR1AmenqOhrwyckjcgtcYg=/794x626:1804x1636/fit-in/99designs-contests-attachments/91/91503/attachment_91503263"
    alt="Anime Icon"
    style={{ width: '40px', height: '40px', borderRadius: '5px' }}
  />
  AnimeAPI
</NavLink>



      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        aria-controls="navbarContent"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse justify-content-between ${isMenuOpen ? "show" : ""}`} id="navbarContent">
        <ul className="navbar-nav mx-auto text-center">
          {['Home', 'About', 'API', 'Price', 'Contact'].map((item, idx) => (
            <li key={idx} className="nav-item my-2 my-lg-0">
              <NavLink
                className="nav-link px-3"
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  color: '#f0f0f0',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  transition: '0.3s ease',
                }}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="d-flex align-items-center gap-3">
          <span
            className="fw-semibold"
            style={{
              color: '#98ff98',
              fontSize: '1rem',
            }}
          >
            Welcome, Kamal
          </span>
          <button
            className="btn btn-sm text-white"
            style={{
              background: 'linear-gradient(45deg, #ff6f61, #ff9472)',
              border: 'none',
              padding: '6px 12px',
              fontWeight: 'bold',
              fontSize: '0.95rem',
            }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
