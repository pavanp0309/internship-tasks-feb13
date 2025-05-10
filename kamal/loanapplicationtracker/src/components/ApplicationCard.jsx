import React from "react";
import { Link } from "react-router-dom";

const ApplicationCard = ({ app }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{app.name}</h5>
        <p className="card-text">
          <strong>Amount:</strong> ₹{app.amount}<br />
          <strong>Status:</strong> {app.status}<br />
          <strong>Date:</strong> {app.date}
        </p>
        <Link to={`/dashboard/applications/${app.id}`} className="btn btn-primary me-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ApplicationCard;
