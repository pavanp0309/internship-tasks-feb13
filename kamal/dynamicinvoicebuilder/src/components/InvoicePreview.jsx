import React from "react";

const previews = {
    "Service Invoice": {
      invoiceId: "SERV-001",
      date: "2025-04-21",
      companyName: "AlphaTech Services",
      billingTo: "Jane Doe",
      bankName: "ICICI Bank",
      accountHolder: "AlphaTech Services",
      bankNumber: "9876543210",
      items: [
        { description: "UI/UX Design", quantity: 1, price: 8000, amount: 8000 },
        { description: "Development", quantity: 1, price: 12000, amount: 12000 },
      ],
      total: 20000,
    },
    "Sales Invoice": {
      invoiceId: "SALE-101",
      date: "2025-04-21",
      companyName: "RetailX Solutions",
      billingTo: "Mr. Sharma",
      bankName: "SBI",
      accountHolder: "RetailX Solutions",
      bankNumber: "1122334455",
      items: [
        { description: "Laptop", quantity: 2, price: 45000, amount: 90000 },
        { description: "Mouse", quantity: 4, price: 500, amount: 2000 },
      ],
      total: 92000,
    },
    "Consulting Invoice": {
      invoiceId: "CONS-555",
      date: "2025-04-21",
      companyName: "Insight Consultants",
      billingTo: "StartUp Inc.",
      bankName: "Axis Bank",
      accountHolder: "Insight Consultants",
      bankNumber: "9988776655",
      items: [
        { description: "Business Strategy Session", quantity: 1, price: 25000, amount: 25000 },
        { description: "Consulting for Marketing Strategy", quantity: 2, price: 15000, amount: 30000 },
      ],
      total: 55000,
    },
  };
  

const InvoicePreview = ({ type }) => {   // Here you are receiving the prop from <InvoicePreview type={selectedType} /> in the CategorySelection.jsx and using it
  const data = previews[type];
  const total = data.items.reduce((acc, item) => acc + item.amount, 0);

  // Define color themes based on invoice type
  const themes = {
    "Sales Invoice": {
      backgroundColor: "#e3f2fd",
      textColor: "#0d47a1",
      buttonColor: "#1e88e5",
    },
    "Service Invoice": {
      backgroundColor: "#f1f8e9",
      textColor: "#388e3c",
      buttonColor: "#43a047",
    },
    "Consulting Invoice": {
      backgroundColor: "#fff3e0",
      textColor: "#ff6f00",
      buttonColor: "#fb8c00",
    },
  };

  const theme = themes[type];

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        borderRadius: "1rem",
        overflow: "hidden",
        color: theme.textColor,
      }}
      className="mb-3"
    >
      {/* Top Wave */}
      <div style={{ position: "relative", marginBottom: "-1px" }}>
        <svg
          viewBox="0 0 500 50"
          preserveAspectRatio="none"
          style={{
            display: "block",
            width: "100%",
            height: "70px",
            transform: "rotate(180deg)",
          }}
        >
          <path d="M0,50 C150,-50 350,100 500,0 L500,50 L0,50 Z" style={{ fill: theme.textColor }} />
        </svg>
      </div>

      {/* Content */}
      <div className="px-4 py-5">
        {/* Heading Section */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h4 className="fw-bold">INVOICE</h4>
            <div className="text-muted">Invoice ID: {data.invoiceId}</div>
            <div className="text-muted">Date: {data.date}</div>
          </div>
          <div className="col-md-6 text-end">
            <h1 className="text-primary">{data.companyName}</h1>
          </div>
        </div>

        {/* Billing + Bank */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h6 className="fw-bold">BILL TO:</h6>
            <p className="mb-0">{data.billingTo}</p>
          </div>
          <div className="col-md-6 text-end">
            <h6 className="fw-bold">PAYMENT INFORMATION:</h6>
            <p className="mb-0"><strong>Bank:</strong> {data.bankName}</p>
            <p className="mb-0"><strong>Name:</strong> {data.accountHolder}</p>
            <p className="mb-0"><strong>Account:</strong> {data.bankNumber}</p>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive mb-3">
          <table className="table table-bordered table-striped table-hover border-dark">
            <thead
              className="table-primary text-white border border-dark"
              style={{ backgroundColor: theme.buttonColor }}
            >
              <tr>
                <th>ITEM</th>
                <th>DESCRIPTION</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, index) => ( //item : current item, index : position in the array (0,1,2,3)
                <tr key={index} className={index % 2 === 0 ? "bg-light" : "bg-white"}> {/*Applies alternate background color: bg-light for even rows.*/}
                  <td className="text-center">{index + 1}</td> {/* For Item Number, since index starts from 0, hence +1*/}
                  <td>{item.description}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-end">₹{item.price}</td>
                  <td className="text-end fw-bold">₹{item.amount.toFixed(2)}</td>  {/* Shows final amount, rounded to 2 decimal places (e.g., ₹2000.00). */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="d-flex justify-content-end mt-4">
          <div
            className="bg-primary text-white p-3 rounded"
            style={{ minWidth: "250px", backgroundColor: theme.buttonColor }}
          >
            <h5 className="mb-0 text-end">Total: ₹{data.total.toFixed(2)}</h5>
          </div>
        </div>

        {/* Terms */}
        <div className="mt-5">
          <h6 className="fw-bold">Terms & Conditions:</h6>
          <p className="text-muted">Payment is due 30 days from the invoice date.</p>
        </div>

        {/* Download Button */}
        <div className="text-center my-1">
          <button className="btn" style={{ backgroundColor: theme.buttonColor }}>
            Download as PDF
          </button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div style={{ position: "relative", marginTop: "2rem" }}>
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "70px" }}>
          <path d="M0,50 C150,-50 350,100 500,0 L500,50 L0,50 Z" style={{ fill: theme.textColor }}></path>
        </svg>
      </div>
    </div>
  );
};

export default InvoicePreview;
