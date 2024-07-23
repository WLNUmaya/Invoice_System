import React from 'react';

const Header = ({ handlePrint, isPrinting }) => {
  return (
    <header className="flex flex-col items-center justify-between mb-5 px-4 sm:px-6 lg:px-8">
      <div className="text-center xl:text-left mb-4">
        <h1 className="font-bold uppercase tracking-wide text-3xl sm:text-4xl">Invoice</h1>
      </div>
      <div className="flex flex-col items-center w-full">
        {!isPrinting && (
          <div className="flex justify-center w-full gap-2 sm:gap-4 flex-wrap">
            <button 
              onClick={handlePrint} 
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
              style={{ minWidth: '120px' }}
            >
              Print
            </button>
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
              style={{ minWidth: '120px' }}
            >
              Download
            </button>
            <button 
              className="bg-purple-500 text-white px-4 py-2 rounded shadow hover:bg-purple-600"
              style={{ minWidth: '120px' }}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
