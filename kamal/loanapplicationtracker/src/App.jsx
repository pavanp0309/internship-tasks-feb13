import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Applications from "./pages/Applications";
import ApplicationDetail from "./pages/ApplicationDetail";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { Suspense, lazy } from "react";

const Settings = lazy(() => import("./pages/Settings"));
// This means: don’t include Settings in the main JS bundle. Only fetch/load it when the user goes to /settings.
// For Example Without lazy loading: All 10 pages load immediately = slower initial load.

const App = () => (
  
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<PrivateRoute><Layout /></PrivateRoute>}>
        <Route index element={<Dashboard />} /> 
        <Route path="applications" element={<Applications />} />
        <Route path="applications/:id" element={<ApplicationDetail />} />
        <Route
            path="settings"
            element={
              <Suspense
                fallback={
                  <div className="d-flex justify-content-center align-items-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                }
              >
                <Settings />
              </Suspense>
            }
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  
);

export default App;
