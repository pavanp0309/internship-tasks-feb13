# 🧾 Dynamic Invoice Builder – React.js Project

This is a **dynamic invoice creation interface** inspired by real-world SaaS billing platforms like **Zoho Invoice** and **QuickBooks**. Built using **React.js**, this app allows users to dynamically add, edit, and delete invoice items, with real-time calculations and PDF export functionality.

---

## 🎯 Project Objective

To simulate real-world invoice creation functionality using front-end technologies. This includes handling dynamic forms, maintaining controlled inputs, managing state with arrays, and auto-calculating totals in real-time.

---

## 🚀 Features

- 📋 **Invoice Item Management**
  - Add or remove invoice item rows dynamically
  - Each item includes:
    - `Description` (Text input)
    - `Quantity` (Number input)
    - `Price` (Number input)
    - `Amount` (Auto-calculated = Quantity × Price)

- 🛠️ **Controlled Input Fields**
  - All inputs are controlled using `useState`
  - Live updates for each change in price or quantity

- 🔄 **Real-Time Calculations**
  - Amounts and grand total update automatically
  - No need for a "Calculate" button

- 🧹 **Clean UX & Layout**
  - Responsive design using **Bootstrap**
  - Table layout for structured invoice view

- 🔐 **Invoice Locking on Submit**
  - Disable all input fields after submission
  - Convert the form into a read-only invoice view

- 📄 **Download as PDF**
  - Export the invoice using `jsPDF` and `AutoTable`
  📄 Export Invoice as PDF
  This project uses jsPDF and jspdf-autotable to export the invoice as a downloadable PDF. On clicking "Download as PDF", the invoice data is formatted into a professional table and saved locally — no backend needed. This simulates real-world SaaS invoicing like Zoho or QuickBooks.

---

## 🛠️ Tech Stack

- **React.js 18+** (Functional components with Hooks)
- **Bootstrap 5** (for responsive layout)
- **HTML5 + CSS3**
- **JavaScript (ES6+)**
- **jsPDF** and **AutoTable** (PDF generation)

---

## 📁 Folder Structure

/src │ ├── components/ │ ├── InvoiceForm.jsx │ ├── InvoicItemeRow.jsx │ └── InvoiceSummary.jsx │ ├── App.jsx ├── main.jsx ├── index.css └── pdfGenerator.js


