import React from 'react';
import { Navigate } from 'react-router-dom';

const isLoggedIn = true; // Simulated auth check

const PrivateRoute = ({ children }) => {
    // children data(<ConsoleLayout/>) coming from this line in routes -> <Route path="/console" element={<PrivateRoute><ConsoleLayout/></PrivateRoute>}>

  return isLoggedIn ? children : <Navigate to="/login" replace />;

//   The replace prop tells React Router to replace the current entry in the browser's history stack instead of adding a new one.
// That means the user cannot press the back button to return to the protected route after being redirected.
};

export default PrivateRoute;

