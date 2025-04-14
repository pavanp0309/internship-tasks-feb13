import React from 'react';

const StatusTracker = ({ status }) => {
  const steps = ["Placed", "Shipped", "Out for Delivery", "Delivered"];
  const currentStep = steps.indexOf(status);

  return (
    <div className="progress mt-3" style={{ height: '20px' }}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`progress-bar $ {index <= currentStep ? 'bg-success' : 'bg-light text-dark'}`}
          role="progressbar"
          style={{ width: `${100 / steps.length}%` }}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default StatusTracker;