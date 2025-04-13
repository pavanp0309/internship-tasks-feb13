import React from 'react'

const TransactionCard = (props) => {

    const { title, amount, date, status, category, invoice } = props.data

        const amt=amount.startsWith("+")
    return (
        <div className='d-flex justify-content-center'>
            <div className="card shadow my-4" style={{ width: '540px',borderRadius:'20px' }}>
            <div className="card-body">

                <div className='d-flex justify-content-between my-2'>
                    <h5 className="card-title fw-bold fs-1">{title}</h5>
                    <p className="card-text fw-bold fs-1" style={{color: amt ? "green":"red"}}>{amount}</p>
                </div>

                <div className='d-flex justify-content-between my-2'>
                    <h5 className="card-text fs-3">{date}</h5>
                    <p className="card-text fw-bold fs-5" style={{ backgroundColor: '#e0f7ea', padding: '5px 10px', borderRadius: '8px' }}>{status}</p>
                </div>
                <p className="card-text fw-bold fs-5 my-4" style={{ backgroundColor: '#ffe9cc', padding: '6px 10px', borderRadius: '8px',width:'150px' }}>{category}</p>
                <p className='card-text fs-4 ' style={{opacity:'80%'}}>{invoice}</p>
            </div>
        </div>
        </div>
    )
}

export default TransactionCard
