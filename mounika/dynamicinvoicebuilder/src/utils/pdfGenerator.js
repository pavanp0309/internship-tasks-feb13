import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // this imports the plugin correctly

const generatePDF = (items, total, accountInfo) => {
  const doc = new jsPDF(); // instantiate jsPDF after autoTable is imported

  doc.setFontSize(18);
  doc.text('INVOICE', 14, 22);

  // Account Info
  doc.setFontSize(12);
  doc.text(`Account Name: ${accountInfo.name}`, 14, 35);
  doc.text(`Account Number: ${accountInfo.number}`, 14, 42);
  doc.text(`Bank Detail: ${accountInfo.bank}`, 14, 49);

  // Table Data
  const tableColumn = ["S.No", "Description", "Quantity", "Price", "Amount"];
  const tableRows = items.map((item, index) => [
    index + 1,
    item.description,
    item.quantity,
    item.price,
    (item.quantity * item.price).toFixed(2),
  ]);

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 60,
  });

  const finalY = doc.lastAutoTable?.finalY || 70;
  doc.text(`Total: $${total.toFixed(2)}`, 14, finalY + 10);

  doc.save('invoice.pdf');
};

export default generatePDF;
