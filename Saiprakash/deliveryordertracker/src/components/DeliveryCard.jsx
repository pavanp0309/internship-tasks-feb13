import React from "react";
import styles from "./DeliveryCard.module.css";

const getPaymentBadge = (status) => {
  switch (status) {
    case "Paid":
      return <span className={styles.badgePaid}>✅ Paid</span>;
    case "COD":
      return <span className={styles.badgeCod}>💵 COD</span>;
    case "Failed":
      return <span className={styles.badgeFailed}>❌ Failed</span>;
    default:
      return null;
  }
};

const getStatusStep = (status) => {
  const steps = ["Placed", "Shipped", "Out for Delivery", "Delivered"];
  return steps.map((step, index) => (
    <div
      key={index}
      className={`${styles.step} ${steps.indexOf(status) >= index ? styles.active : ""}`}
    >
      {step}
    </div>
  ));
};

const DeliveryCard = ({ order }) => {
  return (
    <div className={styles.card}>
      <h3>Order #{order.id}</h3>
      <p><strong>Customer:</strong> {order.customerName}</p>
      <p><strong>Address:</strong> {order.address}</p>
      {order.deliveryInstructions && (
        <p><strong>Instructions:</strong> {order.deliveryInstructions}</p>
      )}
      <p><strong>Items:</strong></p>
      <ul>
        {order.items.map((item, idx) => (
          <li key={idx}>🍽️ {item}</li>
        ))}
      </ul>
      <div>{getPaymentBadge(order.paymentStatus)}</div>
      <div className={styles.statusBar}>
        {getStatusStep(order.deliveryStatus)}
      </div>
      {order.deliveryPartner && (
        <p><strong>Delivery Partner:</strong> {order.deliveryPartner}</p>
      )}
      {order.deliveryStatus !== "Delivered" && order.eta && (
        <p><strong>ETA:</strong> {order.eta}</p>
      )}
    </div>
  );
};

export default DeliveryCard;
