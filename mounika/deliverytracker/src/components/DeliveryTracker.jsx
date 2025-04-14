import React from 'react'
import DeliveryCard from './DeliveryCard';
const orders=[
    {
        orderId:1,
        customerName:"mounika",
        itemsOrdered:["biryani","paneer butter masala","chicken curry"],
        deliveryAddress:"kphb 3 rd phase",
        paymentStatus:"COD",
        deliveryStatus:"Out for Delivery"

    },
    {
        orderId:2,
        customerName:"mounika",
        itemsOrdered:["biryani","paneer butter masala","chicken curry"],
        deliveryAddress:"kphb 3 rd phase",
        paymentStatus:"COD",
        deliveryStatus:"Out for Delivery"

    },
    {
        orderId:3,
        customerName:"mounika",
        itemsOrdered:["biryani","paneer butter masala","chicken curry"],
        deliveryAddress:"kphb 3 rd phase",
        paymentStatus:"COD",
        deliveryStatus:"Out for Delivery"

    },
    {
        orderId:4,
        customerName:"mounika",
        itemsOrdered:["biryani","paneer butter masala","chicken curry"],
        deliveryAddress:"kphb 3 rd phase",
        paymentStatus:"COD",
        deliveryStatus:"Out for Delivery"

    },
    {
        orderId:5,
        customerName:"mounika",
        itemsOrdered:["biryani","paneer butter masala","chicken curry"],
        deliveryAddress:"kphb 3 rd phase",
        paymentStatus:"COD",
        deliveryStatus:"Out for Delivery"

    },
    {
        orderId:6,
        customerName:"mounika",
        itemsOrdered:["biryani","paneer butter masala","chicken curry"],
        deliveryAddress:"kphb 3 rd phase",
        paymentStatus:"COD",
        deliveryStatus:"Out for Delivery"

    },
    {
        orderId:7,
        customerName:"mounika",
        itemsOrdered:["biryani","paneer butter masala","chicken curry"],
        deliveryAddress:"kphb 3 rd phase",
        paymentStatus:"COD",
        deliveryStatus:"Out for Delivery"

    },
    {
        orderId:8,
        customerName:"mounika",
        itemsOrdered:["biryani","paneer butter masala","chicken curry"],
        deliveryAddress:"kphb 3 rd phase",
        paymentStatus:"COD",
        deliveryStatus:"Out for Delivery"

    },
];
const DeliveryTracker = () => {
  return (
    <div className='row'>
        {orders.map((order,index)=>(
            <div className='col-md-6 mb-4' key={index}>
                <DeliveryCard order={order}/>
            </div>
        ))}
      
    </div>
  )
}

export default DeliveryTracker
