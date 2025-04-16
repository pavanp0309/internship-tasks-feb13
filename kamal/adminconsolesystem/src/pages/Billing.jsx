import React from 'react';

const Billing = () => {
  return (
    <div className="container">
      <h3 className="mb-3">Billing Overview</h3>
      <div className="card p-3">
        <p><strong>Current Plan:</strong> Pro</p>
        <p><strong>Next Billing Date:</strong> May 30, 2025</p>
        <p><strong>Amount:</strong> $49.99/month</p>
      </div>
    </div>
  );
};

export default Billing;
