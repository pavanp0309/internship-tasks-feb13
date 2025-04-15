import React from 'react'
import orderDetails from './orderDetails'
import OrderCard from './OrderCard'

const OrderList = () => {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center">
                {
                    orderDetails.map((ele) => (
                        <div className="col col-sm-12 col-md-12  col-lg-12 col-xl-6">
                            <OrderCard order={ele} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default OrderList
