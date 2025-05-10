const orders = [
    {
      id: "ORD123",
      customerName: "Alice",
      items: ["Burger", "Fries", "Coke"],
      address: "123 Main St, New York",
      paymentStatus: "Paid",
      deliveryStatus: "Shipped",
      deliveryPartner: "Raj",
      eta: "30 mins",
      deliveryInstructions: "Ring the bell twice",
    },
    {
      id: "ORD124",
      customerName: "Bob",
      items: ["Pizza", "Pepsi"],
      address: "456 Elm St, LA",
      paymentStatus: "COD",
      deliveryStatus: "Out for Delivery",
    },
    {
      id: "ORD125",
      customerName: "Charlie",
      items: ["Pasta", "Garlic Bread"],
      address: "789 Oak St, SF",
      paymentStatus: "Failed",
      deliveryStatus: "Placed",
      eta: "45 mins",
    },
  ];
  
  export default orders;
  