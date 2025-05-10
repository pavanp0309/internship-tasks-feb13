'use client';

import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const InvoiceSummary = ({ formData }) => {
  const pdfRef = useRef();

  const total = formData.items.reduce((acc, item) => acc + item.amount, 0);
    // .reduce-->JavaScript array method used to reduce an array to a single value.
    //   acc: short for accumulator — it keeps track of the running total.
    //   item: each element (object) in the items array.
    //   acc + item.amount: adds the amount of the current item to the running total.
    //   This is the initial value of the accumulator. So, the summing starts from 0.

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('invoice.pdf');
    });
  };

  return (
    <div
      ref={pdfRef}
      style={{
        backgroundColor: "#e3f2fd",
        borderRadius: "1rem",
        overflow: "hidden",
        color: "#0d47a1",
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
          <path d="M0,50 C150,-50 350,100 500,0 L500,50 L0,50 Z" style={{ fill: "#0d47a1" }} />
        </svg>
      </div>

      {/* Content */}
      <div className="px-4 py-5">
        {/* Heading Section */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h4 className="fw-bold">INVOICE</h4>
            <div className="text-muted">Invoice ID: {formData.invoiceId}</div>
            <div className="text-muted">Date: {formData.date}</div>
          </div>
          <div className="col-md-6 text-end">
            <h1 className="text-primary">{formData.companyName}</h1>
          </div>
        </div>

        {/* Billing + Bank */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h6 className="fw-bold">BILL TO:</h6>
            <p className="mb-0">{formData.billingTo}</p>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-end">
            <div className="text-start">
              <h6 className="fw-bold">PAYMENT INFORMATION:</h6>
              <p className="mb-0"><strong>Bank:</strong> {formData.bankName}</p>
              <p className="mb-0"><strong>Name:</strong> {formData.accountHolder}</p>
              <p className="mb-0"><strong>Account:</strong> {formData.bankNumber}</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive mb-3">
          <table className="table table-bordered table-striped table-hover border-dark">
            <thead
              className="table-primary text-white border border-dark"
              style={{ backgroundColor: "#1e88e5" }}
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
              {formData.items.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-light" : "bg-white"}>
                  <td className="text-center">{index + 1}</td>
                  <td>{item.description}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-end">₹{item.price}</td>
                  <td className="text-end fw-bold">₹{item.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="d-flex justify-content-end mt-4">
          <div
            className="bg-primary text-white p-3 rounded"
            style={{ minWidth: "250px", backgroundColor: "#1e88e5" }}
          >
            <h5 className="mb-0 text-end">Total: ₹{total.toFixed(2)}</h5>
          </div>
        </div>

        {/* Terms */}
        <div className="mt-5">
          <h6 className="fw-bold">Terms & Conditions:</h6>
          <p className="text-muted">Payment is due 30 days from the invoice date.</p>
        </div>

        {/* Download Button */}
        <div className="text-center my-3">
          <button onClick={downloadPDF} className="btn" style={{ backgroundColor: "#1e88e5", color: "whitesmoke" }}>
            Download as PDF
          </button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div style={{ position: "relative", marginTop: "2rem" }}>
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "70px" }}>
          <path d="M0,50 C150,-50 350,100 500,0 L500,50 L0,50 Z" style={{ fill: "#0d47a1" }}></path>
        </svg>
      </div>
    </div>
  );
};

export default InvoiceSummary;
