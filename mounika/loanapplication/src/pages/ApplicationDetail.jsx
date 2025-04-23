import React from 'react';
import { useParams } from 'react-router-dom';
import applications from '../data/dummyApplications';

export default function ApplicationDetail() {
  const { id } = useParams();
  const app = applications.find((a) => a.id.toString() === id);

  if (!app) {
    return <h3 className="text-danger">Application not found</h3>;
  }

  return (
    <div className="card shadow p-4">
      <h2>Application Details</h2>
      <p><strong>ID:</strong> {app.id}</p>
      <p><strong>Name:</strong> {app.name}</p>
      <p><strong>Loan Type:</strong> {app.type}</p>
      <p><strong>Amount:</strong> ₹{app.amount}</p>
      <p><strong>Status:</strong> {app.status}</p>
      <p><strong>Submitted Date:</strong> {app.date}</p>
    </div>
  );
}
