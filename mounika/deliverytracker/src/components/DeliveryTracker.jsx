import React from 'react';
import DeliveryCard from './DeliveryCard';

const orders = [
  { orderId: 1, customerName: 'Mounika', itemsOrdered: ['Lassi', 'Dosa', 'Manchuria'], deliveryAddress: 'Miyapur', paymentStatus: 'Paid', deliveryStatus: 'Delivered' },
  { orderId: 2, customerName: 'Latha', itemsOrdered: ['Biryani', 'Paneer Butter Masala', 'Chicken Curry'], deliveryAddress: 'KPHB 3rd Phase', paymentStatus: 'COD', deliveryStatus: 'Out for Delivery' },
  { orderId: 3, customerName: 'Madhan', itemsOrdered: ['Thali', 'Samosa', 'Pizza'], deliveryAddress: 'Ameerpet', paymentStatus: 'Failed', deliveryStatus: 'Placed' },
  { orderId: 4, customerName: 'Chandra', itemsOrdered: ['Rice', 'Sambar', 'Papad'], deliveryAddress: 'Vinjamur', paymentStatus: 'Paid', deliveryStatus: 'Out for Delivery' },
  { orderId: 5, customerName: 'Raji', itemsOrdered: ['Biryani', 'Paneer Butter Masala', 'Thums Up'], deliveryAddress: 'KPHB', paymentStatus: 'COD', deliveryStatus: 'Delivered' },
  { orderId: 6, customerName: 'Lakshman', itemsOrdered: ['Mushroom Pulao', 'Thali', 'Burger'], deliveryAddress: 'Nellore', paymentStatus: 'Paid', deliveryStatus: 'Shipped' },
  { orderId: 7, customerName: 'Vignesh', itemsOrdered: ['Fish Fry', 'Rice', 'Chicken'], deliveryAddress: 'SR Nagar', paymentStatus: 'COD', deliveryStatus: 'Out for Delivery' },
  { orderId: 8, customerName: 'Anusha', itemsOrdered: ['Veg Rice', 'Curd Rice', 'Water Bottle'], deliveryAddress: 'JNTU', paymentStatus: 'Failed', deliveryStatus: 'Out for Delivery' }
];

const DeliveryTracker = () => {
  return (
    <div className="row">
      {orders.map((order, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
          <DeliveryCard order={order} />
        </div>
      ))}
    </div>
  );
};

export default DeliveryTracker;
