import React from 'react'

import { useParams } from "react-router-dom";

const ProjectSettings = () => {
  const { projectId } = useParams();

  return (
    <div>
      <h3>Settings for Project ID: {projectId}</h3>
      <form>
        <input type="text" placeholder="Edit project name" className="form-control my-2" />
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default ProjectSettings;
