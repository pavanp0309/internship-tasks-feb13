import React from 'react';

function TransactionCard({ title, amount, transactionType, date, category, status }) {
  const amountColor = transactionType === 'credit' ? 'text-success' : 'text-danger';

  const statusClass = {
    Completed: 'badge bg-success',
    Pending: 'badge bg-warning text-dark',
    Failed: 'badge bg-danger',
  }[status] || 'badge bg-secondary';

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className={`card-subtitle mb-2 ${amountColor}`}>₹{amount.toFixed(2)}</h6>
        <p className="card-text mb-1"><strong>Date:</strong> {date}</p>
        <p className="card-text mb-1">
          <strong>Category:</strong> <span className="badge bg-info text-dark">{category}</span>
        </p>
        <p className="card-text">
          <strong>Status:</strong> <span className={statusClass}>{status}</span>
        </p>
      </div>
    </div>
  );
}

export default TransactionCard;
