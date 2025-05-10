import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: "1", name: "Alpha" },
  { id: "2", name: "Beta" },
  { id: "3", name: "Gamma" },
];

const ProjectList = () => {
  return (
    <div className="container">
      <h3 className="mb-4">Projects</h3>
      <div className="row">
        {projects.map((proj) => (
          <div className="col-md-4 mb-4" key={proj.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{proj.name}</h5>
                <p className="card-text">Project ID: {proj.id}</p>
                <div className="d-flex gap-2">
                  <Link to={`/console/projects/${proj.id}`} className="btn btn-primary">
                    Details
                  </Link>
                  <Link to={`/console/projects/${proj.id}/settings`} className="btn btn-secondary">
                    Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
