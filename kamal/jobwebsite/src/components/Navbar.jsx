// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const username = localStorage.getItem("username");

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("username");
//     navigate("/");
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(prev => !prev);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg px-4" style={{ backgroundColor: '#1c1f4a' }}>
//       <NavLink
//   className="navbar-brand fw-bold d-flex align-items-center gap-2"
//   to="/"
//   style={{
//     fontSize: '2.2rem',
//     color: '#00bfff',
//     fontFamily: 'Rajdhani, sans-serif',
//     letterSpacing: '1px',
//     transition: 'all 0.3s ease',
//   }}
//   onMouseEnter={(e) => {
//     e.target.style.color = '#40e0d0'; // turquoise
//     e.target.style.backgroundColor = 'rgba(28, 31, 74, 0.2)'; // semi-transparent navy background
//   }}
//   onMouseLeave={(e) => {
//     e.target.style.color = '#00bfff';
//     e.target.style.backgroundColor = 'transparent';
//   }}
// >
//   <img
//     src="https://w7.pngwing.com/pngs/802/1022/png-transparent-laborer-employment-agency-job-employment-agency-service-logo-employment.png"
//     alt="Job Icon"
//     style={{ width: '40px', height: '40px', borderRadius: '5px' }}
//   />
//   JobHunting
// </NavLink>


//       <button
//         className="navbar-toggler"
//         type="button"
//         onClick={toggleMenu}
//         aria-controls="navbarContent"
//         aria-expanded={isMenuOpen}
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarContent">
//         <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100">
//           <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center mx-auto gap-2">
//             {['Home', 'About', 'Findjob', 'Contact'].map((item, idx) => (
//               <li key={idx} className="nav-item">
//                 <NavLink
//   className="nav-link px-3"
//   to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
//   onClick={() => setIsMenuOpen(false)}
//   style={{
//     color: '#f8f9fa',
//     fontSize: '1.1rem',
//     fontWeight: '500',
//     transition: 'all 0.3s ease',
//     borderRadius: '4px',
//   }}
//   onMouseEnter={(e) => {
//     e.target.style.color = '#00bfff';
//     e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//   }}
//   onMouseLeave={(e) => {
//     e.target.style.color = '#f8f9fa';
//     e.target.style.backgroundColor = 'transparent';
//   }}
// >
//   {item}
// </NavLink>


//               </li>
//             ))}
//           </ul>

//           <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-end gap-2 mt-3 mt-lg-0 text-center">
//             {!localStorage.getItem("isLoggedIn") ? (
//               <NavLink
//                 className="btn btn-sm text-white"
//                 to="/login"
//                 style={{
//                   background: 'linear-gradient(45deg, #ff6f61, #ff9472)',
//                   border: 'none',
//                   padding: '6px 12px',
//                   fontWeight: 'bold',
//                   fontSize: '0.95rem',
//                 }}
//               >
//                 Login
//               </NavLink>
//             ) : (
//               <>
//                 <span
//                   className="fw-semibold"
//                   style={{
//                     color: '#98ff98',
//                     fontSize: '1rem',
//                   }}
//                 >
//                   Welcome, {username}
//                 </span>
//                 <button
//   className="btn btn-sm text-white"
//   style={{
//     background: '#d9534f',
//     border: 'none',
//     padding: '6px 12px',
//     fontWeight: 'bold',
//     fontSize: '0.95rem',
//     transition: 'background-color 0.3s ease',
//   }}
//   onClick={handleLogout}
//   onMouseEnter={(e) => (e.target.style.backgroundColor = '#e57373')} // lighter red
//   onMouseLeave={(e) => (e.target.style.backgroundColor = '#d9534f')} // original red
// >
//   Logout
// </button>

//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4" style={{ backgroundColor: '#1c1f4a' }}>
      <NavLink
        className="navbar-brand fw-bold d-flex align-items-center gap-2"
        to="/"
        style={{
          fontSize: '2.2rem',
          color: '#00bfff',
          fontFamily: 'Rajdhani, sans-serif',
          letterSpacing: '1px',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#40e0d0';
          e.target.style.backgroundColor = 'rgba(28, 31, 74, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#00bfff';
          e.target.style.backgroundColor = 'transparent';
        }}
      >
        <img
          src="https://w7.pngwing.com/pngs/802/1022/png-transparent-laborer-employment-agency-job-employment-agency-service-logo-employment.png"
          alt="Job Icon"
          style={{ width: '40px', height: '40px', borderRadius: '5px' }}
        />
        JobSprint
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

      <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarContent">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100">
          <ul className="navbar-nav d-flex flex-column flex-lg-row justify-content-center align-items-center mx-auto gap-2">
            {['Home', 'About', 'Findjob', 'Contact'].map((item, idx) => (
              <li key={idx} className="nav-item">
                <NavLink
                  className="nav-link px-3"
                  to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    color: '#f8f9fa',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    borderRadius: '4px',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#00bfff';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#f8f9fa';
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-end gap-2 mt-3 mt-lg-0 text-center">
            {!localStorage.getItem("isLoggedIn") ? (
              <>
                <NavLink
                  className="btn btn-sm text-white"
                  to="/employersignin"
                  style={{
                    background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
                    border: 'none',
                    padding: '6px 12px',
                    fontWeight: 'bold',
                    fontSize: '0.95rem',
                  }}
                >
                  Employer Login
                </NavLink>
                <NavLink
                  className="btn btn-sm text-white"
                  to="/login"
                  style={{
                    background: 'linear-gradient(45deg, #ff6f61, #ff9472)',
                    border: 'none',
                    padding: '6px 12px',
                    fontWeight: 'bold',
                    fontSize: '0.95rem',
                  }}
                >
                  Login
                </NavLink>
              </>
            ) : (
              <>
                <span
                  className="fw-semibold"
                  style={{
                    color: '#98ff98',
                    fontSize: '1rem',
                  }}
                >
                  Welcome, {username}
                </span>
                <button
                  className="btn btn-sm text-white"
                  style={{
                    background: '#d9534f',
                    border: 'none',
                    padding: '6px 12px',
                    fontWeight: 'bold',
                    fontSize: '0.95rem',
                    transition: 'background-color 0.3s ease',
                  }}
                  onClick={handleLogout}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#e57373')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#d9534f')}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
