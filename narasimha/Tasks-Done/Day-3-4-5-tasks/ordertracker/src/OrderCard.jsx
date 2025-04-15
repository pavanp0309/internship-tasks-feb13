import React from 'react'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'

const OrderCard = ({ order }) => {

    const { orderId, customerName, itemsOrdered, deliveryAddress, paymentStatus, currentDeliveryStatus } = order
    console.log(order)
    console.log(itemsOrdered)


    let paymentBadge = () => {

        switch (paymentStatus) {
            case "paid":
                return { text: '✅Paid', color: 'lightgreen' };
            case "cod":
                return { text: '💰Cod', color: 'orange' };
            case "failed":
                return { text: '❌Failed', color: '#fa8072' };
            default:
                return { text: '', color: 'white' }
        }
    }

    let { text, color } = paymentBadge();


    return (
        <div className="card shadow my-3 mx-4" style={{ width: '500px' }} >
            <div className='d-flex justify-content-between mx-3 my-3 '>
                <h4 className='card-text ' style={{ fontSize: '30px' }} >{orderId}</h4>
                <p className='card-text fs-5 fw-bold rounded text-center ' style={{ backgroundColor: 'lightblue', padding: '7px 10px', width: '120px' }}>{currentDeliveryStatus}</p>
            </div>
       
                <h4 className="card-title mx-4">{customerName}</h4>
                <p className="card-text mx-3 my-2 ">{
                    itemsOrdered.map((item) => { return <span className='mx-2 fw-bold rounded text-center  ' style={{backgroundColor:'lightgray',padding:'3px 8px'}} >{item}</span> })
                }</p>
                <h6 className='card-text mx-4 my-2'><i className="bi bi-geo-alt"></i> {deliveryAddress}</h6>
                <p className='fw-bold rounded my-4 text-center mx-3' style={{backgroundColor:color, padding: '4px 10px', fontSize: '15px', width: '100px' }}>{text}</p>

          
        </div>
    )
}

export default OrderCard
