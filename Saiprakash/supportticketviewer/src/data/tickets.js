const tickets = [
    {
      id: "TKT001",
      customer: { name: "Alice Johnson", type: "Premium", avatar: "" },
      summary: "Login not working",
      description: "User cannot login after recent update",
      created: "2025-04-12",
      priority: "High",
      status: "Open",
      escalated: true,
    },
    {
      id: "TKT002",
      customer: { name: "Bob Smith", type: "Free" },
      summary: "Billing mismatch",
      description: "Invoice total is incorrect",
      created: "2025-04-10",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: "TKT003",
      customer: { name: "Carol Lee", type: "Premium", avatar: "" },
      summary: "Feature request",
      description: "Requesting dark mode feature",
      created: "2025-03-28",
      priority: "Low",
      status: "Closed",
    },
  ];
  
  export default tickets;
  