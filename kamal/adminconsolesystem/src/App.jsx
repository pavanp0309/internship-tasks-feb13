import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import ProjectList from './pages/ProjectList';
import ProjectDetail from './pages/ProjectDetail';
import ProjectSettings from './pages/ProjectSettings';
import Billing from './pages/Billing';
import Activity from './pages/Activity';
import PrivateRoute from './pages/PrivateRoute';
import ConsoleLayout from './pages/ConsoleLayout';


function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/console" element={<PrivateRoute><ConsoleLayout/></PrivateRoute>}>
          <Route path="projects" element={<ProjectList/>} />
          <Route path="projects/:projectId" element={<ProjectDetail/>} />
          <Route path="projects/:projectId/settings" element={<ProjectSettings/>} />
          <Route path="billing" element={<Billing/>} />
          <Route path="activity" element={<Activity/>} />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
  );
}

export default App;

