import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectSettings = () => {
  const { projectId } = useParams();
  return (
    <div className="container mt-4">
      <h3>Settings for Project ID: {projectId}</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Project Name</label>
          <input type="text" className="form-control" placeholder="Enter new name" />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default ProjectSettings;