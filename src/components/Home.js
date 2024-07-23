import React, { useState, useEffect } from 'react';
import Header from './Header';
import CompanyDetail from './CompanyDetail';
import Clientdetail from './Clientdetail';
import ItemsTable from './ItemsTable';
import Payment from './Payment';
import PrintLayout from './PrintLayout'; 

function Home() {
  const [clientName, setClientName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState(() => `INV${Math.floor(100000 + Math.random() * 900000)}`);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [items, setItems] = useState([{ itemName: "", quantity: "", price: "", amount: "" }]);
  const [subtotal, setSubtotal] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isPrinting, setIsPrinting] = useState(false);

  const companyDetails = {
    companyName: "Global System",
    companyAddress: "123 Company Street, City, Country",
    companyPhone: "+1234567890",
    companyEmail: "info@company.com"
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { itemName: "", quantity: "", price: "", amount: "" }]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  useEffect(() => {
    const calculateSubtotal = () => {
      const subtotalValue = items.reduce((acc, item) => {
        const quantity = parseFloat(item.quantity) || 0;
        const price = parseFloat(item.price) || 0;
        return acc + (quantity * price);
      }, 0);
      setSubtotal(subtotalValue);
    };
    calculateSubtotal();
  }, [items]);

  useEffect(() => {
    const discountValue = discountPercentage ? (subtotal * parseFloat(discountPercentage)) / 100 : 0;
    setDiscount(discountValue);
  }, [subtotal, discountPercentage]);

  useEffect(() => {
    setTotal(subtotal - discount);
  }, [subtotal, discount]);
  const handlePrint = () => {
    setIsPrinting(true);
    const itemsHtml = items.map(item => `
      <tr>
        <td>${item.itemName}</td>
        <td class="text-center">${item.quantity}</td>
        <td class="text-right">$${Number(item.price).toFixed(2)}</td>
        <td class="text-right">$${(Number(item.quantity) * Number(item.price)).toFixed(2)}</td>
      </tr>
    `).join('');
  
    const printWindow = window.open('', '', 'height=600,width=800');
    
    printWindow.document.write(`
      <html>
      <head>
        <title>Invoice Print</title>
        <style>
          body {
            font-family: 'Times New Roman', serif;
            font-size: 14px;
          }
          .print-layout {
            padding: 20px;
          }
          .header {
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
          }
          .company-detail {
            margin-bottom: 20px;
          }
          .client-payment-details {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-bottom: 20px;
          }
          .client-detail, .payment-detail {
            margin-bottom: 10px;
          }
          .client-detail div, .payment-detail div {
            margin-bottom: 8px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #ddd;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
             font-family: 'Times New Roman', serif;
          }
          th {
            background-color: #f4f4f4;
            font-weight: bold;
          }
          .text-right {
            text-align: right;
          }
          .text-center {
            text-align: center;
          }
          .amount-summary {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            font-family: 'Times New Roman', serif;
          }
          .amount-summary div {
            margin-top: 10px;
          }
          .total-highlight {
            font-weight: bold;
            font-size: 1.2em;
            color: red;
            border-bottom: 2px solid red;
            padding-bottom: 5px;
          }
          .notice {
            margin-top: 20px;
            font-style: italic;
            font-size: 12px;
            border-top: 1px solid #ddd;
            padding-top: 10px;
            text-align: right;
          }
          @page {
            margin: 20mm;
          }
        </style>
      </head>
      <body>
        <div class="print-layout">
          <header class="header">
            <h1>Invoice</h1>
          </header>
          <section class="company-detail">
            <div>
              <h2>${companyDetails.companyName}</h2>
              <p>${companyDetails.companyAddress}</p>
              <p>Phone: ${companyDetails.companyPhone}</p>
              <p>Email: ${companyDetails.companyEmail}</p>
            </div>
          </section>
          <section class="client-payment-details">
            <div class="client-detail">
              <div>Client Name: ${clientName}</div>
              <div>Invoice Number: ${invoiceNumber}</div>
            </div>
            <div class="payment-detail">
              <div>Payment Method: ${paymentMethod}</div>
            </div>
          </section>
          <section class="items-table">
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th class="text-center">Quantity</th>
                  <th class="text-right">Price</th>
                  <th class="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>
          </section>
          <section class="amount-summary">
            <div>Subtotal: $${Number(subtotal).toFixed(2)}</div>
            <div>Discount: $${Number(discount).toFixed(2)}</div>
            <div class="total-highlight">Total: $${Number(total).toFixed(2)}</div>
          </section>
          <section class="notice">
            <p>Notice: Please ensure that payment is made within 30 days. For any queries, contact us at ${companyDetails.companyEmail}.</p>
          </section>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    setIsPrinting(false);
  };
  
  
  
  
  return (
    <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow-lg">
      <div>
        <Header handlePrint={handlePrint} isPrinting={isPrinting} />
        <CompanyDetail
          companyName={companyDetails.companyName}
          companyAddress={companyDetails.companyAddress}
          companyPhone={companyDetails.companyPhone}
          companyEmail={companyDetails.companyEmail}
        />
        <Clientdetail
          clientName={clientName}
          invoiceNumber={invoiceNumber}
          setClientName={setClientName}
        />
        <Payment
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <ItemsTable
          items={items}
          handleItemChange={handleItemChange}
          addItem={addItem}
          removeItem={removeItem}
          discountPercentage={discountPercentage}
          setDiscountPercentage={setDiscountPercentage}
        />
      </div>
    </main>
  );
}

export default Home;
