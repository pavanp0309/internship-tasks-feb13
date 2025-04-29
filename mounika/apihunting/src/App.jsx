import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import ApiExplorer from './pages/ApiExplorer';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
          <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/api" element={isLoggedIn ? <ApiExplorer /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;