import React from 'react'
import DeliveryOrderTracker from './components/DeliveryOrderTracker'
import orderData from './data/data'

const App = () => {
  return (
    <div>
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold text-primary display-6 border-bottom pb-3">
          📦 Delivery Order Tracker
        </h2>
        {orderData.map((order) => (
  <DeliveryOrderTracker id={order.id} 
  customerName={order.customerName} 
  items={order.items}
  address={order.address}
  paymentStatus={order.paymentStatus}
  deliveryStatus={order.deliveryStatus}
  deliveryInstructions={order.deliveryInstructions}
  deliveryPartner={order.deliveryPartner}
  eta={order.eta}
  />
))}
      </div>
    </div>
  )
}

export default App
