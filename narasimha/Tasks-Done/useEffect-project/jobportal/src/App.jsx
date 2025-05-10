import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Render from './components/Render';
import ProtectedRoute from './components/ProtectedRoute';
import JobDetailsCard from './components/JobDetailsCard';
import EmployeeLogin from './pages/EmployeeLogin';
import EmployeeRegister from './pages/EmployeeRegister';
import Employee from './components/Employee';
import PostedJobs from './pages/PostedJobs';
import CreateJob from './pages/CreateJob';
import Profile from './pages/Profile';
import EmployeeHome from './pages/EmployeeHome';
import EditProfile from './pages/EditProfile';
import EmployeeProtectedRoute from './components/EmployeeProtectedRoute';
import ErrorPage from './pages/ErrorPage';

const App = () => {

  // User login
  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem('isLogin') === 'true';
  });

  const handleLogin = () => {
    setIsLogin(true);
    localStorage.setItem('isLogin', 'true');
  };

  const handleLogOut = () => {
    setIsLogin(false);
    localStorage.setItem('isLogin', 'false');
  };

  // Employee login
  const [empLogin, setEmpLogin] = useState(() => {
    return localStorage.getItem('empLogin') === 'true';
  });

  const handleEmpLogin = () => {
    setEmpLogin(true);
    localStorage.setItem('empLogin', 'true');
  };

  // logout already done

  // Layout visibility
  const location = useLocation();
  const hideLayoutPaths = ['/login', '/register', '/employeelogin'];
  const hideLayoutPrefixes = ['/employee'];

  const showLayout =
    !hideLayoutPaths.includes(location.pathname) &&
    !hideLayoutPrefixes.some(prefix => location.pathname.startsWith(prefix));

  return (
    <div>
      {showLayout && <Header onLogout={handleLogOut} isLogin={isLogin} />}
      <Routes>
      <Route
          path="/employeelogin"
          element={<EmployeeLogin onEmpLogin={handleEmpLogin} />}
        />
        <Route path="/register" element={<EmployeeRegister />} />
        <Route
          path="/employee"
          element={<EmployeeProtectedRoute empLogin={empLogin}>   <Employee /> </EmployeeProtectedRoute>
          }
        >
          <Route index element={<EmployeeHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="postedjobs" element={<PostedJobs />} />
          <Route path="createjob" element={<CreateJob />} />
        </Route>

        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/findjobs"
          element={<ProtectedRoute isLogin={isLogin}> <Render isLogin={isLogin} /></ProtectedRoute>}
        />
        <Route
          path="/findjobs/:jobid"
          element={<ProtectedRoute isLogin={isLogin}>   <JobDetailsCard /> </ProtectedRoute>}
        />

        {/**Error page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {showLayout && <Footer />}
    </div>
  );
};

export default App;
