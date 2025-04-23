import React from 'react';

const InvoiceItemRow = ({ index, item, updateItem, removeItem, isSubmitted }) => (
  <tr>
    <td><input className="form-control" value={item.description} disabled={isSubmitted} onChange={(e) => updateItem(index, 'description', e.target.value)} /></td>
    <td><input className="form-control" type="number" value={item.quantity} disabled={isSubmitted} onChange={(e) => updateItem(index, 'quantity', +e.target.value)} /></td>
    <td><input className="form-control" type="number" value={item.price} disabled={isSubmitted} onChange={(e) => updateItem(index, 'price', +e.target.value)} /></td>
    <td>${item.amount.toFixed(2)}</td>
    {!isSubmitted && <td><button className="btn btn-danger" onClick={() => removeItem(index)}>Delete</button></td>}
  </tr>
);

export default InvoiceItemRow;