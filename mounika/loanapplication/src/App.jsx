import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './pages/DashboardLayout';
import ApplicationList from './pages/ApplicationsList';
import ApplicationDetail from './pages/ApplicationDetail';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
// import PrivateRoute from './routes/PrivateRoute';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
        <Route path="applications" element={<ApplicationList />} />
        <Route path="applications/:id" element={<ApplicationDetail />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}