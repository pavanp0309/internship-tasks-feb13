import React from 'react';
import { NavLink } from 'react-router-dom';

const EmployeeHome = () => (
  <div className="text-center " style={{marginTop:'120px'}}>
    <h2>Welcome to Your Dashboard!</h2>
    <p className="lead">Manage your job postings, create new ones, and update your profile settings.</p>
    <NavLink to="/employee/createjob">
      <button className="btn btn-primary mt-3">Create New Job</button>
    </NavLink>
  </div>
);

export default EmployeeHome;
