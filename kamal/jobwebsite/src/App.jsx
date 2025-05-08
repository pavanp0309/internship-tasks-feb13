import Home from './pages/Home'
import About from './pages/About'
import Findjob from './pages/Findjob'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import JobDetail from './components/JobDetail'
import Jobs from './Jobs'

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import EmployerSignup from './pages/EmployerSignup'
import EmployerSignin from './pages/EmployerSignin'
import EmployerDashboard from './pages/EmployerDashboard'
import EmpPostedJobs from './components/EmpPostedJobs'
import EmpCreateJob from './components/EmpCreateJob'
import EmpWelcomeDashboard from './components/EmpWelcomeDashboard'
import EmpProfile from './components/EmpProfile'
import EmpPrivateRoute from './components/EmpPrivateRoute'


const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation(); // useLocation is a React Router hook that gives you information about the current URL, including the path (like /, /about, /login, etc).
  console.log('the path right now is: ',location)
  // the path right now is:  {pathname: '/employerdashboard', search: '', hash: '', state: null, key: 'br40oyym'}
  const navigate = useNavigate();


  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    const employerLoggedIn = localStorage.getItem("isEmployerLoggedIn") === "true";
    console.log("the employer loggin state is:",employerLoggedIn)
    const publicRoutes = ["/", "/about", "/contact", "/login","/employersignup","/employersignin"];

    if (
      employerLoggedIn &&
      publicRoutes.includes(location.pathname) // if user types /, /about, /contact in url ->it would check if those are included in the publicRoutes, hence when both are true, it would redirect him to dashboard
    ) {
      navigate("/employerdashboard");
    }
  }, [location.pathname]);

 
  return (
    <>
      {(isLoggedIn || ["/", "/about", "/contact"].includes(location.pathname)) && location.pathname !== "/login" && (
  <Navbar setIsLoggedIn={setIsLoggedIn} />
)}


      <div>
<Routes>
    {/* Public Route */}
    <Route path="/login" element={<Login />} />

    {/* Protected Routes */}
    <Route index element={<Home />}/>
    <Route path="/about" element={<About />}/>

    {/* <Route path="/findjob" element={<PrivateRoute><Findjob/></PrivateRoute>}/> */}
    <Route path="/findjob" element={<PrivateRoute><Findjob /></PrivateRoute>}>
      <Route index element={<PrivateRoute><Jobs /></PrivateRoute>} />
      <Route path=":id" element={<PrivateRoute><JobDetail /></PrivateRoute>} />
    </Route>

    <Route path="/contact"element={<Contact />}/>

    {/* Fallback Route */}
    <Route path="*" element={<NotFound />} />

    <Route path="/employersignup" element={<EmployerSignup />} />
    <Route path="/employersignin" element={<EmployerSignin />} />

    <Route path="/employerdashboard" element={<EmpPrivateRoute><EmployerDashboard /></EmpPrivateRoute>}>
      <Route index element={<EmpPrivateRoute><EmpWelcomeDashboard /></EmpPrivateRoute>} />
      <Route path="profile" element={<EmpPrivateRoute><EmpProfile /></EmpPrivateRoute>} />
      <Route path="posted-jobs" element={<EmpPrivateRoute><EmpPostedJobs /></EmpPrivateRoute>} />
      <Route path="create-job" element={<EmpPrivateRoute><EmpCreateJob /></EmpPrivateRoute>} />
    </Route>

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

export default App
