import React from 'react';

const PaymentBadge = ({ status }) => {
  const getBadge = () => {
    switch (status) {
      case 'Paid':
        return <span className="badge bg-success">Paid ✅</span>;
      case 'COD':
        return <span className="badge bg-warning text-dark">COD 💰</span>;
      case 'Failed':
        return <span className="badge bg-danger">Failed ❌</span>;
      default:
        return <span className="badge bg-secondary">Unknown</span>;
    }
  };

  return getBadge();
};

export default PaymentBadge;