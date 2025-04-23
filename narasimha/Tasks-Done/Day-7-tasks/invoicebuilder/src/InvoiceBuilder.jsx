import React, { useState } from "react";
import './App.css'

const InvoiceBuilder = () => {
  const [items, setItems] = useState([{ description: "", quantity: 1, price: 0 }]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = field === "description" ? value : parseFloat(value) || 0;
    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, price: 0 }]);
  };

  const deleteItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="container py-5">
      <div className="card shadow rounded-4">
        <div className="card-header bg-gradient bg-primary text-white py-3 rounded-top-4">
          <h2 className="mb-0 text-center">🧾 QuickBill</h2>
        </div>

        <div className="card-body px-4 py-4">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr className="text-center">
                <th>Description</th>
                <th style={{ width: "100px" }}>Qty</th>
                <th style={{ width: "120px" }}>Price (₹)</th>
                <th style={{ width: "140px" }}>Amount (₹)</th>
                {!isSubmitted && <th style={{ width: "90px" }}>Action</th>}
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                const amount = item.quantity * item.price;
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter item"
                        value={item.description}
                        onChange={(e) => handleChange(index, "description", e.target.value)}
                        disabled={isSubmitted}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control text-end"
                        value={item.quantity}
                        onChange={(e) => handleChange(index, "quantity", e.target.value)}
                        disabled={isSubmitted}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control text-end"
                        value={item.price}
                        onChange={(e) => handleChange(index, "price", e.target.value)}
                        disabled={isSubmitted}
                      />
                    </td>
                    <td className="text-end fw-medium">₹{amount.toFixed(2)}</td>
                    {!isSubmitted && (
                      <td className="text-center">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => deleteItem(index)}
                        >
                          ✖
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>

            <tfoot>
              <tr className="table-secondary fw-bold">
                <td colSpan={3} className="text-end">
                  Total:
                </td>
                <td className="text-end">₹{total.toFixed(2)}</td>
                {!isSubmitted && <td />}
              </tr>
            </tfoot>
          </table>

          {/* Action Buttons */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            {!isSubmitted ? (
              <>
                <button className="btn btn-outline-primary" onClick={addItem}>
                  ➕ Add Item
                </button>
                <button className="btn btn-success px-4" onClick={() => setIsSubmitted(true)}>
                  ✅ Submit Invoice
                </button>
              </>
            ) : (
              <div className="ms-auto">
                <button className="btn btn-dark d-print-none px-4" onClick={() => window.print()}>
                  🖨️ Print / Save PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceBuilder;
