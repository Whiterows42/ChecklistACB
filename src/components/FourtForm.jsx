import React, { useState } from 'react';

const ProtectionSettingsForm = ({onFormDataChange}) => {
  const [formData, setFormData] = useState({
    // ... previous form fields ...
    
    // New signature fields
    customerName: '',
    customerMobile: '',
    representativeName: '',
    representativeMobile: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    const updatedFormData = {
      ...formData,
      [name]: value
    };
  
    setFormData(updatedFormData);
    onFormDataChange(updatedFormData); // Notify parent component
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ... previous form content ... */}

        {/* Signature Section */}
        <div className="mt-8 border-t pt-6">
          <div className="grid grid-cols-2 gap-8">
            {/* Customer Signature Section */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm">SIGNATURE OF CUSTOMER</h3>
              <div>
                <label className="block text-sm mb-1">NAME:</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">MOBILE NO:</label>
                <input
                  type="text"
                  name="customerMobile"
                  value={formData.customerMobile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>

            {/* Representative Signature Section */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm">SIGNATURE OF SCHNEIDER REPRESENTATIVE</h3>
              <div>
                <label className="block text-sm mb-1">NAME:</label>
                <input
                  type="text"
                  name="representativeName"
                  value={formData.representativeName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">MOBILE NO: +91</label>
                <input
                  type="text"
                  name="representativeMobile"
                  value={formData.representativeMobile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter number after +91"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Data
        </button> */}
      </form>
    </div>
  );
};

export default ProtectionSettingsForm;