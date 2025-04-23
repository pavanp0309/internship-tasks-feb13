const StatsSummary = ({ tickets }) => {
    const total = tickets.length;
    const open = tickets.filter(t => t.status === 'Open').length;
    const closed = tickets.filter(t => t.status === 'Closed').length;
  
    return (
      <div className="my-4">
        <h5>Quick Stats</h5>
        <div className="d-flex gap-3">
          <span className="badge bg-primary">Total: {total}</span>
          <span className="badge bg-success">Open: {open}</span>
          <span className="badge bg-secondary">Closed: {closed}</span>
        </div>
      </div>
    );
  };
  
  export default StatsSummary;
  