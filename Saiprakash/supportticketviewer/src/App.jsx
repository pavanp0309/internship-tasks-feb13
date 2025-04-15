import React from "react";
import tickets from "./data/tickets";
import TicketCard from "./components/TicketCard";

const groupByStatus = (tickets) => {
  return {
    Open: tickets.filter((t) => t.status === "Open"),
    "In Progress": tickets.filter((t) => t.status === "In Progress"),
    Closed: tickets.filter((t) => t.status === "Closed"),
  };
};

const App = () => {
  const grouped = groupByStatus(tickets);
  const total = tickets.length;
  const open = grouped.Open.length;
  const closed = grouped.Closed.length;

  return (
    <div style={{ padding: "2rem", background: "#f4f7fa", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#0073e6", fontSize: "2.5rem", marginBottom: "1.5rem" }}>
        🎫 Support Ticket Viewer
      </h1>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <strong>Total:</strong> {total} | <strong>Open:</strong> {open} | <strong>Closed:</strong> {closed}
      </div>

      {Object.entries(grouped).map(([status, tickets]) => (
        <div key={status} style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#444", marginBottom: "1rem" }}>{status}</h2>
          <div style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
