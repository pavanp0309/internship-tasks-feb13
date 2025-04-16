import React from "react";

const TransactionHistoryCard = ({
  title,
  amount,
  transactionType,
  date,
  status,
  category,
}) => {
  const amountClass =
    transactionType === "credit" ? "text-success" : "text-danger";

  const statusBadge = {
    completed: "bg-success",
    pending: "bg-warning text-dark",
    failed: "bg-danger",
  };

  return (
    <div className="card shadow-lg border-0 rounded-4 p-4 mb-4 bg-light">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h5 className="mb-2 fw-bold text-dark">
            <i
              className={`bi ${
                transactionType === "credit"
                  ? "bi-arrow-down-circle-fill text-success"
                  : "bi-arrow-up-circle-fill text-danger"
              } me-2 fs-5`}
            ></i>
            {title}
          </h5>
          <small className="text-muted">
            <i className="bi bi-calendar-event me-1"></i>
            {date}
          </small>
        </div>
        <div
          className={`fw-bold fs-5 px-3 py-1 rounded ${amountClass} bg-white shadow-sm`}
        >
          {transactionType === "credit" ? "+" : "-"}${amount}
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2">
        <span
          className={`badge ${statusBadge[status]} rounded-pill px-3 py-2 text-capitalize shadow-sm`}
        >
          <i className="bi bi-info-circle-fill me-1"></i>
          {status}
        </span>
        <span className="badge bg-primary text-white rounded-pill px-3 py-2 shadow-sm">
          <i className="bi bi-tags-fill me-1"></i>
          {category}
        </span>
      </div>
    </div>
  );
};

export default TransactionHistoryCard;
