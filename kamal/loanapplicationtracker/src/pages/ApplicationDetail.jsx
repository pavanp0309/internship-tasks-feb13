import React from "react";
import { useParams } from "react-router-dom";
import applications from "../data/dummyApplications";

const ApplicationDetail = () => {
  const { id } = useParams();
  const app = applications.find(a => a.id === id);

  if (!app) return <p>Application not found.</p>;

  return (
    <div>
      <h4 className="mb-3">Application Details</h4>
      <ul className="list-group">
        <li className="list-group-item"><strong>ID:</strong> {app.id}</li>
        <li className="list-group-item"><strong>Name:</strong> {app.name}</li>
        <li className="list-group-item"><strong>Loan Type:</strong> {app?.type}</li>
        <li className="list-group-item"><strong>Amount:</strong> ₹{app.amount}</li>
        <li className="list-group-item"><strong>Status:</strong> {app.status}</li>
        <li className="list-group-item"><strong>Submitted Date:</strong> {app.date}</li>
      </ul>
    </div>
  );
};

export default ApplicationDetail;
