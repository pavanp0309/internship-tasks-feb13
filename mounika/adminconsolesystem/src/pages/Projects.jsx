import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const dummyProjects = [1, 2, 3];
  return (
    <div className="container mt-4">
      <h3>Projects</h3>
      <div className="row">
        {dummyProjects.map(id => (
          <div key={id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Project {id}</h5>
                <Link to={`/console/projects/${id}`} className="btn btn-outline-primary btn-sm me-2">Details</Link>
                <Link to={`/console/projects/${id}/settings`} className="btn btn-outline-secondary btn-sm">Settings</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
