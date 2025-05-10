import { NavLink, useNavigate, Outlet } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <NavLink to="/dashboard/applications">Applications</NavLink>
          <NavLink to="/dashboard/settings">Settings</NavLink>
        </nav>
        <button onClick={handleLogout}>Logout</button>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
