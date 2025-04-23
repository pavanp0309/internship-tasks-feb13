import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();
  return (
    <div className="container mt-4">
      <h3>Project Details - ID: {projectId}</h3>
    </div>
  );
};

export default ProjectDetail;