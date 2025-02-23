import React, { useState } from 'react';
import { EquipmentFormFunction } from './slices/CheckListSlice';
import { useDispatch } from 'react-redux';

const EquipmentForm = ({onFormDataChange}) => {
  const [formData, setFormData] = useState({
    poNo: '',
    qaNo: '',
    customerName: '',
    equipmentType: '',
    feederNo: '',
    rating: '',
    serialNo: '',
    static: '',
    panelNo: '',
    protectionRelease: '',
    thermal: '',
    mtcDoneOn: '',
    nextDueOn: '',
    // Protection Settings
    ir: '',
    tr: '',
    isd: '',
    tsd: '',
    ii: '',
    ig: '',
    tg: '',
    // FFTK Currents
    irA: '',
    irSec: '',
    isdA: '',
    isdSec: '',
    iiA: '',
    iiSec: '',
    igA: '',
    igSec: ''
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedFormData);
    
    // Notify parent component of data changes
    onFormDataChange(updatedFormData);
  };
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(EquipmentFormFunction(formData))
    console.log('Form Data:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Header Row */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="block text-sm mb-1">PO No.:</label>
            <input
              type="text"
              name="poNo"
              value={formData.poNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">QA No:</label>
            <input
              type="text"
              name="qaNo"
              value={formData.qaNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          {/* <div className="text-right">
            <span className="text-green-600 font-semibold">Electric</span>
          </div> */}
        </div>

        <div>
            <label className="block text-sm mb-1">Customer Name & Location:</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        {/* Customer Details Row */}
        <div className="grid grid-cols-3 gap-4">
          
          <div>
            <label className="block text-sm mb-1">Equipment type:</label>
            <input
              type="text"
              name="equipmentType"
              value={formData.equipmentType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Feeder No :</label>
            <input
              type="text"
              name="mtcDoneOn"
              value={formData.feederNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Mtc. Done on:</label>
            <input
              type="date"
              name="mtcDoneOn"
              value={formData.mtcDoneOn}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        </div>

        {/* Equipment Details Row */}
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm mb-1">Rating:</label>
            <input
              type="text"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Serial No.:</label>
            <input
              type="text"
              name="serialNo"
              value={formData.serialNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Panel No.:</label>
            <input
              type="text"
              name="serialNo"
              value={formData.panelNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          
          
          <div>
            <label className="block text-sm mb-1">Next Due on:</label>
            <input
              type="date"
              name="nextDueOn"
              value={formData.nextDueOn}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        </div>

        {/* Protection Settings */}


        <div>

          <h3 className='font-medium mb-2'>
            Production Release
          </h3>
 <div className='flex justify-between'>
 <div className=' '>
            <label className="block text-sm mb-1">Thermal:</label>
            <input
              type="text"
              name="state"
              value={formData.thermal}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Static:</label>
            <input
              type="text"
              name="state"
              value={formData.static}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
 </div>
          
        </div>
        <div>
          <h3 className="font-medium mb-2">Protection Settings:</h3>
          <div className="grid grid-cols-7 gap-4">
            {['Ir', 'Tr', 'Isd', 'Tsd', 'II', 'Ig', 'Tg'].map((label) => (
              <div key={label}>
                <label className="block text-sm mb-1">{label}:</label>
                <input
                  type="text"
                  name={label.toLowerCase()}
                  value={formData[label.toLowerCase()]}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FFTK Currents */}
        <div>
          <h3 className="font-medium mb-2">FFTK CURRENTS:</h3>
          <div className="grid grid-cols-4 gap-4">
            {['Ir', 'Isd', 'II', 'Ig'].map((prefix) => (
              <div key={prefix} className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm mb-1">{prefix}:</label>
                  <input
                    type="text"
                    name={`${prefix.toLowerCase()}A`}
                    value={formData[`${prefix.toLowerCase()}A`]}
                    onChange={handleInputChange}
                    placeholder="A"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Sec:</label>
                  <input
                    type="text"
                    name={`${prefix.toLowerCase()}Sec`}
                    value={formData[`${prefix.toLowerCase()}Sec`]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
            ))}
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

export default EquipmentForm;