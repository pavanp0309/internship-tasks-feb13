import React from 'react'
import TransactionHistoryCard from './components/TransactionHistoryCard'
import transactionData from './data/data'
import 'bootstrap-icons/font/bootstrap-icons.css';


const App = () => {
  return (
    <div className="container py-5" style={{ minHeight: "100vh", background: "linear-gradient(to right, #f8f9fa, #e9ecef)" }}>
      <h2 className="mb-5 text-center fw-bold text-primary display-6 border-bottom border-primary pb-3">
        💳 Transaction History
      </h2>

      {/* All transaction cards stacked vertically */}
      {transactionData.map((txn) => (
        <TransactionHistoryCard key={txn.id} {...txn} />
      ))}
    </div>
  )
}

export default App
