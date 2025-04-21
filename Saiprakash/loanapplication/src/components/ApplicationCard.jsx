export default function ApplicationCard({ app, onView }) {
    return (
      <div className="card">
        <p><strong>Name:</strong> {app.name}</p>
        <p><strong>Loan Amount:</strong> {app.loanAmount}</p>
        <p><strong>Status:</strong> {app.status}</p>
        <p><strong>Submitted At:</strong> {app.submittedAt}</p>
        <button onClick={() => onView(app.id)}>View Details</button>
      </div>
    );
  }