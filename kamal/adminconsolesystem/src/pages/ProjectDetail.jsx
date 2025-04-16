import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Dummy data for demonstration
const projects = [
  { id: "1", name: "Alpha", status: "Active", description: "Alpha is our core development project." },
  { id: "2", name: "Beta", status: "Paused", description: "Beta focuses on experimental features." },
  { id: "3", name: "Gamma", status: "Completed", description: "Gamma is the archived legacy system." },
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  // useParams fetches id from url dynamically

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <h4>Project not found.</h4>;
  }

  return (
    <div className="container">
      <h3 className="mb-3">Project Details</h3>
      <div className="card p-3 shadow-sm">
        <h5>{project.name}</h5>
        <p><strong>ID:</strong> {project.id}</p>
        <p><strong>Status:</strong> {project.status}</p>
        <p><strong>Description:</strong> {project.description}</p>
        <Link to="settings" className="btn btn-secondary mt-2">Go to Settings</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
