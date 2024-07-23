import React from 'react';

const Clientdetail = ({ clientName, invoiceNumber, setClientName }) => {
  return (
    <div className="mb-5">
      <div className="flex items-center space-x-4">
        <div className="w-1/2">
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 no-print">
            Client Name
          </label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            placeholder="Enter Client Name"
            autoComplete="off"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="block w-full border border-gray-300 rounded px-3 py-2 mt-1 outline-none"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700 no-print">
            Invoice Number
          </label>
          <input
            type="text"
            id="invoiceNumber"
            name="invoiceNumber"
            value={invoiceNumber}
            readOnly
            className="block w-full border border-gray-300 rounded px-3 py-2 mt-1 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Clientdetail;
