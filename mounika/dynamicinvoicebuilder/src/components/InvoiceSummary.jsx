import React from 'react';

const InvoiceSummary = ({ total }) => (
  <div className="mt-3">
    <h5>Total: ${total.toFixed(2)}</h5>
  </div>
);

export default InvoiceSummary;