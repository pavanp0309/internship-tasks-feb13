import React from "react";
import TransactionCard from "./TransactionCard";

function App() {
  const transactions = [
    {
      id: 1,
      title: "Big Bazaar Grocery",
      amount: 1500,
      transactionType: "debit",
      date: "2025-04-10",
      category: "Groceries",
      status: "Completed",
      note: "Bought daily groceries",
    },
    {
      id: 2,
      title: "Swiggy",
      amount: 350,
      transactionType: "debit",
      date: "2025-04-12",
      category: "Food",
      status: "Pending",
      note: "Dinner order",
    },
    {
      id: 3,
      title: "Monthly EMI",
      amount: 5000,
      transactionType: "debit",
      date: "2025-04-01",
      category: "EMI",
      status: "Completed",
      note: "Car loan EMI",
    },
    {
      id: 4,
      title: "Salary Credit",
      amount: 35000,
      transactionType: "credit",
      date: "2025-04-05",
      category: "Income",
      status: "Completed",
      note: "Monthly salary",
    },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>💳 Transaction History</h2>
      {transactions.map((txn) => (
        <TransactionCard key={txn.id} {...txn}>
          <i>{txn.note}</i>
        </TransactionCard>
      ))}
    </div>
  );
}

export default App;
