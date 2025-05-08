import React from 'react';
import { NavLink } from 'react-router-dom';

const EmpWelcomeDashboard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light"
    style={{ height: '90dvh' }}>
      <div className="border border-primary rounded shadow p-5 text-center bg-white">
        <h1 className="mb-4 text-primary">Welcome to JobHunting</h1>
        <NavLink to="create-job" className="btn btn-primary">Start Posting</NavLink>
      </div>
    </div>
  );
};

export default EmpWelcomeDashboard;
