import React from 'react';
import './App.css'; // Ensure your custom CSS file is imported

const Payment = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="mb-5">
      <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 no-print">
        Payment Method
      </label>
      <div className="relative">
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="custom-dropdown block w-full border border-gray-300 rounded px-3 py-2 mt-1 outline-none text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Payment Method</option>
          <option value="creditCard">Cash</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Bank Transfer</option>
        </select>
      </div>
    </div>
  );
};

export default Payment;
