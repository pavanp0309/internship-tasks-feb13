import { useParams } from 'react-router-dom';
import { dummyApplications } from '../data/dummyApplications';

const ApplicationDetail = () => {
  const { id } = useParams();
  const app = dummyApplications.find(item => item.id === Number(id));

  if (!app) return <p>Application not found</p>;

  return (
    <div className="detail-card">
      <h2>{app.name}</h2>
      <p>Loan Amount: {app.loanAmount}</p>
      <p>Status: {app.status}</p>
      <p>Submitted At: {app.submittedAt}</p>
    </div>
  );
};

export default ApplicationDetail;
