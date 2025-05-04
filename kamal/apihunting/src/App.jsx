import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import API from './pages/API';
import Price from './pages/Price';
import AnimeDetailsCard from './components/AnimeDetailsCard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import Contact from './pages/Contact';
import RecipesDetails from './components/RecipesDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons


const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, [location.pathname, setIsLoggedIn]);

 
  return (
    <>
      {isLoggedIn && location.pathname !== '/login' && (
        <Navbar setIsLoggedIn={setIsLoggedIn} />
      )}

      <div>
<Routes>
    {/* Public Route */}
    <Route path="/login" element={<Login />} />

    {/* Protected Routes */}
    <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
    <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>}/>

    <Route path="/api" element={<PrivateRoute><API /></PrivateRoute>}/>
    <Route path="/api/:animeId" element={<PrivateRoute><AnimeDetailsCard /></PrivateRoute>}/>
    <Route path="/api/recipe/:recipesId" element={<PrivateRoute><RecipesDetails /></PrivateRoute>}/>


    <Route path="/price"element={<PrivateRoute><Price /></PrivateRoute>}/>

    <Route path="/contact"element={<PrivateRoute><Contact /></PrivateRoute>}/>

    {/* Fallback Route */}
    <Route path="*" element={<NotFound />} />
</Routes>

      </div>
    </>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
};

export default App;
