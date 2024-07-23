import React, { useState, useEffect } from 'react';

const ItemsTable = ({ items, handleItemChange, addItem, removeItem, discountPercentage, setDiscountPercentage }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedSubtotal = items.reduce((acc, item) => acc + (parseFloat(item.quantity) || 0) * (parseFloat(item.price) || 0), 0);
    setSubtotal(calculatedSubtotal);
  }, [items]);

  useEffect(() => {
    const discountValue = discountPercentage ? (subtotal * parseFloat(discountPercentage)) / 100 : 0;
    setDiscount(discountValue);
  }, [subtotal, discountPercentage]);

  useEffect(() => {
    setTotal(subtotal - discount);
  }, [subtotal, discount]);


  const handleItemClick = (index) => setSelectedItemIndex(index);

  const handleRemoveItemClick = () => {
    if (selectedItemIndex !== null) removeItem(selectedItemIndex);
    setSelectedItemIndex(null);
  };

  const handleDiscountChange = (e) => {
    setDiscountPercentage(e.target.value);
  };

  return (
    <div className="mt-5">
      <h2 className="text-lg font-semibold mb-2">Items</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mb-5">
          <thead>
            <tr className="bg-blue-200">
              <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">Item Name</th>
              <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 text-center">Quantity</th>
              <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 text-center">Price</th>
              <th className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className={selectedItemIndex === index ? 'bg-gray-100 cursor-pointer' : 'cursor-pointer'}
                onClick={() => handleItemClick(index)}
              >
                <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2">
                  <input type="text" className="w-full border-0 px-2 py-1 outline-none" placeholder="Item Name" value={item.itemName} onChange={(e) => handleItemChange(index, 'itemName', e.target.value)} />
                </td>
                <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 text-center">
                  <input type="text" className="w-full border-0 px-2 py-1 outline-none text-center" placeholder="Quantity" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', e.target.value)} />
                </td>
                <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 text-center">
                  <input type="number" step="0.01" className="w-full border-0 px-2 py-1 outline-none text-right" placeholder="Price" value={item.price} onChange={(e) => handleItemChange(index, 'price', e.target.value)} />
                </td>
                <td className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 text-right">
                  ${((item.quantity || 0) * (item.price || 0)).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mb-5 no-print">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow mr-2" onClick={addItem}>Add Item</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow" onClick={handleRemoveItemClick} disabled={selectedItemIndex === null}>Remove Item</button>
      </div>

      <div className="flex justify-end mt-5">
        <div className="w-1/2 px-2">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Discount (%):</span>
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 outline-none w-20 text-right"
              value={discountPercentage}
              onChange={handleDiscountChange}
            />
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsTable;
