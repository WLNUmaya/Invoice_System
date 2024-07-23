import React from 'react';
import CompanyDetail from './CompanyDetail';  // Ensure the path is correct
import Clientdetail from './Clientdetail'; 
 

const PrintLayout = ({ clientName, invoiceNumber, paymentMethod, subtotal, total, discount, items, discountPercentage }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white border border-gray-300 shadow-md">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold">Invoice</h1>
      </header>
      <section className="mb-6 border-b-2 border-gray-300 pb-4">
        <CompanyDetail
          companyName="Global System"
          companyAddress="123 Company Street, City, Country"
          companyPhone="+1234567890"
          companyEmail="info@company.com"
        />
      </section>
      <section className="mb-6 border-b-2 border-gray-300 pb-4">
        <div className="mb-2">
          <span className="font-bold">Client Name:</span>
          <span className="ml-2">{clientName}</span>
        </div>
        <div>
          <span className="font-bold">Invoice Number:</span>
          <span className="ml-2">{invoiceNumber}</span>
        </div>
      </section>
      <section className="mb-6 border-b-2 border-gray-300 pb-4">
        <div className="mb-2">Payment Method: {paymentMethod}</div>
        <div className="mb-2">Subtotal: ${subtotal.toFixed(2)}</div>
        <div className="mb-2">Discount: {discountPercentage}%</div>
        <div className="total-highlight">Total: ${total.toFixed(2)}</div>
      </section>
      <section>
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Item Name</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Quantity</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{item.itemName}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{item.quantity}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">${item.price}</td>
                <td className="border border-gray-300 px-4 py-2 text-right">${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PrintLayout;
