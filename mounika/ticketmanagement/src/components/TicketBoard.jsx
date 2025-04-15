import TicketCard from "./TicketCard";

const TicketBoard = ({ tickets }) => {
  const groupByStatus = ["Open", "In Progress", "Closed"];

  return (
    <div className="row">
      {groupByStatus.map(status => (
        <div key={status} className="col-md-4">
          <h5>{status}</h5>
          {tickets.filter(ticket => ticket.status === status).map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TicketBoard;
