import React from "react";
import styles from "./TicketCard.module.css";

const getStatusColor = (status) => {
  switch (status) {
    case "Open":
      return styles.statusOpen;
    case "In Progress":
      return styles.statusInProgress;
    case "Closed":
      return styles.statusClosed;
    default:
      return "";
  }
};

const TicketCard = ({ ticket }) => {
  const initials = ticket.customer.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className={`${styles.card} ${getStatusColor(ticket.status)}`}>
      <div className={styles.header}>
        {ticket.customer.avatar ? (
          <img src={ticket.customer.avatar} alt="avatar" className={styles.avatar} />
        ) : (
          <div className={styles.initials}>{initials}</div>
        )}
        <div>
          <h4>{ticket.customer.name}</h4>
          {ticket.customer.type === "Premium" && (
            <span className={styles.premium}>⭐ Premium</span>
          )}
        </div>
      </div>

      <p><strong>ID:</strong> {ticket.id}</p>
      <p><strong>Summary:</strong> {ticket.summary}</p>
      <p><strong>Description:</strong> {ticket.description}</p>
      <p><strong>Created:</strong> {ticket.created}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Status:</strong> {ticket.status}</p>

      {ticket.escalated && ticket.priority === "High" && (
        <span className={styles.escalated}>🚨 Escalated</span>
      )}

      {ticket.status === "Open" && (
        <button className={styles.followBtn}>Follow Up</button>
      )}
    </div>
  );
};

export default TicketCard;
