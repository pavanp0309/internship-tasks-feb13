import React from 'react';
import { useNavigate } from 'react-router-dom';
import applications from '../data/dummyApplications';

export default function ApplicationList() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Loan Applications</h2>
      <div className="row">
        {applications.map((app) => (
          <div key={app.id} className="col-md-6 col-lg-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{app.name}</h5>
                <p>Amount: ₹{app.amount}</p>
                <p>Status: {app.status}</p>
                <p>Date: {app.date}</p>
                <button onClick={() => navigate(`/dashboard/applications/${app.id}`)} className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}