import { Link } from 'react-router-dom';
import { dummyApplications } from '../data/dummyApplications';

const Applications = () => {
  return (
    <div>
      <h2>Applications List</h2>
      {dummyApplications.map(app => (
        <div key={app.id} className="card">
          <p><strong>{app.name}</strong></p>
          <p>{app.loanAmount}</p>
          <p>{app.status}</p>
          <p>{app.submittedAt}</p>
          <Link to={`/dashboard/applications/${app.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Applications;
