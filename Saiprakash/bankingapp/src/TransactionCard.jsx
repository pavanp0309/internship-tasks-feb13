import React from "react";
import styles from "./TransactionCard.module.css";
import { FaUtensils, FaShoppingCart, FaCar, FaMoneyBillWave } from "react-icons/fa";

const categoryIcons = {
  Groceries: <FaShoppingCart />,
  Food: <FaUtensils />,
  Fuel: <FaCar />,
  EMI: <FaMoneyBillWave />,
};

const TransactionCard = ({
  title,
  amount,
  transactionType,
  date,
  category,
  status,
  children,
}) => {
  const amountColor = transactionType === "credit" ? styles.green : styles.red;

  const statusStyles = {
    Completed: styles.completed,
    Pending: styles.pending,
    Failed: styles.failed,
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <span className={`${styles.amount} ${amountColor}`}>
          ₹{amount.toFixed(2)}
        </span>
      </div>

      <div className={styles.meta}>
        <span>{new Date(date).toLocaleDateString()}</span>
        <span className={`${styles.status} ${statusStyles[status]}`}>{status}</span>
      </div>

      <div className={styles.category}>
        {categoryIcons[category] || "🏷️"} <span>{category}</span>
      </div>

      {children && <div className={styles.notes}>{children}</div>}
    </div>
  );
};

export default TransactionCard;
