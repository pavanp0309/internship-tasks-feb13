import React from "react";
import applications from "../data/dummyApplications";
import ApplicationCard from "../components/ApplicationCard";

const Applications = () => {
  return (
    <div>
      <h4 className="mb-4">Loan Applications</h4>
      {applications.map(app => (
        <ApplicationCard key={app.id} app={app} />
      ))}
    </div>
  );
};

export default Applications;
