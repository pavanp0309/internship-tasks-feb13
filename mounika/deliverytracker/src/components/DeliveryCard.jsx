import React from 'react';
import ItemsList from './ItemsList';
import PaymentBadge from './PaymentBadge';
import StatusTracker from './StatusTracker';

const DeliveryCard = ({ order }) => {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Order ID: {order?.orderId}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Customer: {order?.customerName}</h6>
        <ItemsList items={order?.itemsOrdered} />
        <p className="mt-2 mb-1"><strong>Address:</strong> {order?.deliveryAddress}</p>

        <div className="d-flex align-items-center justify-content-between mb-2">
          <PaymentBadge status={order?.paymentStatus} />
          <small className="text-muted">{order?.deliveryStatus}</small>
        </div>

        <StatusTracker status={order?.deliveryStatus} />

        {order?.deliveryStatus === 'Out for Delivery' && (
          <button className="btn btn-success btn-sm mt-3 w-100">Mark as Delivered</button>
        )}
        {order?.deliveryStatus === 'Placed' && (
          <button className="btn btn-primary btn-sm mt-3 w-100">Start Shipping</button>
        )}
      </div>
    </div>
  );
};

export default DeliveryCard;