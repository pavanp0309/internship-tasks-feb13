import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
import ThemeWrapper from './components/ThemeWrapper';
import { Suspense } from 'react';

const ConsoleLayout = React.lazy(() => import('./layouts/ConsoleLayout'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const ProjectSettings = React.lazy(() => import('./pages/ProjectSettings'));
const Billing = React.lazy(() => import('./pages/Billing'));
const Activity = React.lazy(() => import('./pages/Activity'));

const App = () => {
  return (
    
    <ThemeWrapper> 
      <ScrollToTop />
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/console/*"
            element={
              <PrivateRoute>
                <ConsoleLayout />
              </PrivateRoute>
            }
          >
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<ProjectDetail />} />
            <Route path="projects/:projectId/settings" element={<ProjectSettings />} />
            <Route path="billing" element={<Billing />} />
            <Route path="activity" element={<Activity />} />
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      
    </ThemeWrapper> 
  );
};

export default App;