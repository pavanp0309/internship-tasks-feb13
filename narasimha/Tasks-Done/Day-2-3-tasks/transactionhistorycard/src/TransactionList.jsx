import React from 'react'
import transactionDetails from './transactionDetails'
import TransactionCard from './TransactionCard'

const TransactionList = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    transactionDetails.map((ele) => (
                        <div className="col col-sm-12 col-md-12 col-lg-6">
                            <TransactionCard data={ele} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TransactionList
