import React, { useState } from "react";
import InvoicePreview from "./InvoicePreview";

const CategorySelection = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState("Service Invoice");

  const invoiceTypes = ["Service Invoice", "Sales Invoice", "Consulting Invoice"];

  const handleStartClick = () => {
    onSelect(selectedType); // Here onSelect coming from line 4(in app.jsx taken props with onSelect name)
  };

  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        {/* Left: Invoice Type List */}
        <div className="col-md-4 border-end">
          <h3 className="text-center mb-4">Invoice Types</h3>
          <div className="btn-group-vertical w-100">
            {invoiceTypes.map((type) => (  // type is just the name of the current item in the array as it loops. On first loop → type = "Service Invoice", second → type = "Sales Invoice"
              <button // For each loop, it return a button
                key={type}
                className={`btn ${selectedType === type ? "btn-primary" : "btn-outline-primary"}`} // If the currently selected type matches this type, we give it the btn-primary class (highlighted).
                onClick={() => setSelectedType(type)} // When the button is clicked, it updates selectedType to that button’s type.
              >
                {type}
              </button>
            ))}
          </div>
          {/* Get Started Button */}
          <div className="text-center mt-4">
            <button className="btn btn-success" onClick={handleStartClick}>
              Get Started
            </button>
          </div>
        </div>
  
        {/* Right: Preview */}
        <div className="col-md-8">
          <InvoicePreview type={selectedType} />  {/*You're passing the currently selected invoice type (like "Service Invoice") as a prop named type to the InvoicePreview component.*/}
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
