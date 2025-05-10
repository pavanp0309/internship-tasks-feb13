import React from "react";
import orders from "./data/orders";
import DeliveryCard from "./components/DeliveryCard";

const App = () => {
  return (
    <div style={{ background: "#fef9f4", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{
        textAlign: "center",
        marginBottom: "2rem",
        fontSize: "2.5rem",
        color: "#ff6f00",
        fontWeight: "bold",
      }}>
        🚚 Delivery Order Tracker
      </h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
        flexWrap: "wrap"
      }}>
        {orders.map((order) => (
          <DeliveryCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default App;
