import React from 'react';

const ItemsList = ({ items }) => {
  return (
    <ul className="list-group list-group-flush my-2">
      {items?.map((item, idx) => (
        <li key={idx} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};
export default ItemsList