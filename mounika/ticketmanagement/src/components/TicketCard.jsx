const TicketCard = ({ ticket }) => {
    const {
      id, customerName, customerType, avatar,
      issueSummary, description, createdDate,
      priority, status
    } = ticket;
  
    const getStatusBadge = (status) => {
      switch (status) {
        case "Open": return "bg-success";
        case "In Progress": return "bg-warning text-dark";
        case "Closed": return "bg-secondary";
        default: return "bg-light";
      }
    };
  
    const getInitials = (name) => {
      return name.split(" ").map(n => n[0]).join("").toUpperCase();
    };
  
    return (
      <div className="card mb-3">
        <div className="card-body d-flex align-items-start gap-3">
          <div>
            {avatar ? (
              <img src={avatar} alt={customerName} className="rounded-circle" width="50" height="50" />
            ) : (
              <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                {getInitials(customerName)}
              </div>
            )}
          </div>
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between">
              <h6>{issueSummary}</h6>
              <span className={`badge ${getStatusBadge(status)}`}>{status}</span>
            </div>
            <p className="mb-1">{description}</p>
            <small>ID: {id} | Date: {createdDate}</small><br />
            <small>Priority: {priority}</small>
  
            <div className="mt-2 d-flex gap-2 flex-wrap">
              {customerType === 'Premium' && <span className="badge bg-info">Premium</span>}
              {priority === 'High' && <span className="badge bg-danger">Escalated</span>}
              {status === 'Open' && <button className="btn btn-sm btn-outline-primary">Follow Up</button>}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TicketCard;
  