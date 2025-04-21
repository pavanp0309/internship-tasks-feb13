import { NavLink, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/login');
  }

  return (
    <div style={{ padding: '1rem', borderRight: '1px solid #ccc', minHeight: '100vh' }}>
      <h3>Admin Panel</h3>
      <nav>
        <NavLink to="applications" style={{ display: 'block', margin: '8px 0' }}>Applications</NavLink>
        <NavLink to="settings" style={{ display: 'block', margin: '8px 0' }}>Settings</NavLink>
        <button onClick={handleLogout} style={{ marginTop: '1rem' }}>Logout</button>
      </nav>
    </div>
  );
}