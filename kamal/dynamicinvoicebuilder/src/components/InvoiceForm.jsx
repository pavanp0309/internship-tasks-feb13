import React from "react";

const InvoiceForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });  // setting the key value pairs in the formData
    // e.target.name taken from the input’s name attribute).
    // e.target.value is whatever the user typed into that field.
  };

  const handleItemChange = (index, field, value) => {  // passing arguments, coming from input field
    const updatedItems = [...formData.items];  // Copy existing items
    updatedItems[index][field] = value;  // Update the field at that index
  
    const quantity = parseFloat(updatedItems[index].quantity) || 0; 
    const price = parseFloat(updatedItems[index].price) || 0;
    // parseFloat() converts strings (like "5") into floating point numbers (like 5.0).
    // || 0 ensures fallback to 0 if the value is empty, invalid, or NaN.

    updatedItems[index].amount = quantity * price; // Recalculate amount
  
    setFormData({ ...formData, items: updatedItems }); // you’re replacing the value of the items key with a new updated value, while keeping the rest of the object the same.
  };
  

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { description: "", quantity: "", price: "", amount: 0 }]
    });
  };

  const removeItem = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);  // .filter() creates a new array that excludes the item at the given index. ;; i !== index says "Include all items except the one at the index we want to remove.”
    setFormData({ ...formData, items: updatedItems });
  };

  return (
    <div>
      <h4>Invoice Details</h4>

      <div className="mb-3">
        <input className="form-control mb-2" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
        <input className="form-control mb-2" name="invoiceId" placeholder="Invoice ID" value={formData.invoiceId} onChange={handleChange} />
        <input className="form-control mb-2" type="date" name="date" value={formData.date} onChange={handleChange} />
        <input className="form-control mb-2" name="billingTo" placeholder="Billing To" value={formData.billingTo} onChange={handleChange} />
      </div>

      <h5>Line Items</h5>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formData.items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><input className="form-control" value={item.description} onChange={(e) => handleItemChange(index, "description", e.target.value)} /></td>
              <td><input type="number" inputMode="numeric" className="form-control" value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} /></td>
              <td><input type="number" inputMode="numeric" className="form-control" value={item.price} onChange={(e) => handleItemChange(index, "price", e.target.value)} /></td>
              <td>{item.amount.toFixed(2)}</td>
              <td><button className="btn btn-danger btn-sm" onClick={() => removeItem(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-outline-primary mb-4" onClick={addItem}>+ Add Item</button>

      <h5>Payment Information</h5>
      <input className="form-control mb-2" name="bankName" placeholder="Bank Name" value={formData.bankName} onChange={handleChange} />
      <input className="form-control mb-2" name="accountHolder" placeholder="Account Holder Name" value={formData.accountHolder} onChange={handleChange} />
      <input className="form-control mb-2" name="bankNumber" placeholder="Account Number" value={formData.bankNumber} onChange={handleChange} />
    </div>
  );
};

export default InvoiceForm;