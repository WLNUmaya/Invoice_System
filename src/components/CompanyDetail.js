import React from 'react';

const CompanyDetail = ({ companyName, companyAddress, companyPhone, companyEmail }) => {
  return (
    <div className="mb-5 text-left">
      <h2 className="text-2xl font-semibold">{companyName}</h2>
      <p>{companyAddress}</p>
      <p>Phone: {companyPhone}</p>
      <p>Email: {companyEmail}</p>
    </div>
  );
};

export default CompanyDetail;
