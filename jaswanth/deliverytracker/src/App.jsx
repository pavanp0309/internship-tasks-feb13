import React from 'react'
import { orders } from './data'
import DeliveryCard from './DeliveryCard'

const App = () => {
  return (
    <div>
      <div className="container">
        <h1 className='text-center'> Delivery Order Tracker UI </h1>
        <div className="row">
        
        {
          orders.map((ele)=>{
            const {id,customerName,items,deliveryAddress,paymentStatus,currentStatus}=ele
            console.log(ele)
            return <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
            <DeliveryCard
              Aid={id}
              AcustomerName={customerName}
              Aitems={items}
              AdeliveryAddress={deliveryAddress}
              ApaymentStatus={paymentStatus}
              AcurrentStatus={currentStatus}
              />
            </div>

          })
        }
        </div>
      </div>
    </div>
  )
}

export default App