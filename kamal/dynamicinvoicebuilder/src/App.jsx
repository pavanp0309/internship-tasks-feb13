import React, { useState } from "react";
import CategorySelection from "./components/CategorySelection";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceSummary from "./components/InvoiceSummary";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [selectedType, setSelectedType] = useState(null); 
  const [formData, setFormData] = useState({
    companyName: "",
    invoiceId: "",
    date: "",
    billingTo: "",
    bankName: "",
    accountHolder: "",
    bankNumber: "",
    items: [
      { description: "", quantity: 0, price: 0, amount: 0 }
    ]
  });

  return (
    <div className="container-fluid mt-4">
      {selectedType === "Sales Invoice" ? (
        // Render form & summary ONLY for Service Invoice
        <div className="row">
          <div className="col-md-5">
            <InvoiceForm formData={formData} setFormData={setFormData} />
          </div>
          <div className="col-md-7">
            <InvoiceSummary formData={formData} />
          </div>
        </div>
      ) : (
        // Show category selection if no type is selected or type is not "Sales Invoice"
        <CategorySelection onSelect={setSelectedType} />
      )}
    </div>
  );
};

export default App;