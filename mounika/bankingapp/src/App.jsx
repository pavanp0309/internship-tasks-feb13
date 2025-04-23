import React from 'react';
import TransactionCard from './components/TransactionCard';
import transactions from './components/transactions';

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Transaction History</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {transactions.map((txn) => (
          <div className="col" key={txn.id}>
            <TransactionCard {...txn} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
