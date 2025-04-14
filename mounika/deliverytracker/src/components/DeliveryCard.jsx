import React from 'react'
import ItemsList from './ItemsList'
import PaymentBadge from './PaymentBadge'
import StatusTracker from './StatusTracker'
const DeliveryCard = ({order}) => {
  return (
    <div className='card shadow-sm'>
        <div className='card-body'>
            <h5 className='card-title'>Order ID:{order?.oredrId}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>Customer:{order?.customerName}</h6>
            <ItemsList items={order?.itemsOrdered}/>
            <p className='mt-2 mb-1'><strong>Address:</strong>{order?.deliveryAddress}</p>
            <div className='d-flex align-items-center justify-content-between'>
                <PaymentBadge status={order?.paymentStatus}/>
            <small className='text-muted'>Delivery Status:{order?.deliveryStatus}</small>
        </div>
        <StatusTracker status={order?.deliveryStatus}/>
        {order?.deliveryStatus === "Out for Delivery" && (
            <button className='btn btn-warning btn-sm mt-3'>Mark as Delivered</button>
        )}
        {order?.deliveryStatus === "Placed" && (
            <button className='btn btn-info btn-sm mt-3'>Order is Conformed</button>
        )}
        {order?.deliveryStatus === "Shipped" && (
            <button className='btn btn-primary btn-sm mt-3'>Mark as Shipped</button>
        )}
        {order?.deliveryStatus === "Delivered" && (
            <button className='btn btn-success btn-sm mt-3'>Delivered Successfully</button>
        )}
        </div>
      
    </div>
  );
};

export default DeliveryCard
