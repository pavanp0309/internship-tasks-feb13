import React, { useState } from 'react';
import InvoiceItemRow from './InvoiceItemRow';
import InvoiceSummary from './InvoiceSummary';
import generatePDF from '../utils/pdfGenerator';

const InvoiceForm = () => {
  const [items, setItems] = useState([
    { description: '', quantity: 0, price: 0, amount: 0 },
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [accountInfo, setAccountInfo] = useState({
    number: '',
    name: '',
    bank: '',
  });

  const updateItem = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    updatedItems[index].amount = updatedItems[index].quantity * updatedItems[index].price;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { description: '', quantity: 0, price: 0, amount: 0 }]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleAccountChange = (e) => {
    setAccountInfo({ ...accountInfo, [e.target.name]: e.target.value });
  };

  const total = items.reduce((sum, item) => sum + item.amount, 0);

  const submitInvoice = () => {
    setIsSubmitted(true);
  };

  const handleDownload = () => {
    generatePDF(items, total, accountInfo);
  };
  return (
    <div>
      <h2 className="mb-4">Invoice</h2>

      {!isSubmitted && (
        <div className="mb-4">
          <label>Account Number:</label>
          <input name="number" className="form-control" onChange={handleAccountChange} />

          <label>Account Name:</label>
          <input name="name" className="form-control" onChange={handleAccountChange} />

          <label>Bank Detail:</label>
          <input name="bank" className="form-control" onChange={handleAccountChange} />
        </div>
      )}

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
            {!isSubmitted && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <InvoiceItemRow
              key={idx}
              index={idx}
              item={item}
              updateItem={updateItem}
              removeItem={removeItem}
              isSubmitted={isSubmitted}
            />
          ))}
        </tbody>
      </table>

      {!isSubmitted && <button className="btn btn-primary" onClick={addItem}>+ Add Item</button>}

      <InvoiceSummary total={total} />

      {!isSubmitted ? (
        <button className="btn btn-success mt-3" onClick={submitInvoice}>Submit Invoice</button>
      ) : (
        <button className="btn btn-primary mt-3" onClick={handleDownload}>
  Download PDF
</button>


      )}
    </div>
  );
};

export default InvoiceForm;
