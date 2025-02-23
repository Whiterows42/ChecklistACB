import { useState } from "react";
import EquipmentForm from "./FirstForm";
import InspectionForm from "./SecondForm";
import JobDoneForm from "./ThirdForm";
import { useNavigate } from "react-router-dom";
import ProtectionSettingsForm from "./FourtForm";
import { useDispatch } from 'react-redux';
import { CustomerInfoFuntion, EquipmentFormFunction, InspectionFormFunction, JobDoneFormFunction } from './slices/CheckListSlice';

const steps = ["Step 1: EquipmentForm", "Step 2: InspectionForm", "Step 3: JobDoneForm", "Step 4: Customer Info"];

const Stepper = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    equipment: null,
    inspection: null,
    jobDone: null,
    cusotmerInfo: null
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormDataChange = (stepData) => {
    setFormData(prev => ({
      ...prev,
      [getCurrentFormKey()]: stepData
    }));
  };

  const getCurrentFormKey = () => {
    switch(step) {
      case 0: return 'equipment';
      case 1: return 'inspection';
      case 2: return 'jobDone';
      case 3: return 'cusotmerInfo';
      default: return '';
    }
  };

  const nextStep = () => {
    // Save current step data to Redux
    const currentData = formData[getCurrentFormKey()];
    if (currentData) {
      if (step === 0) {
        dispatch(EquipmentFormFunction(formData.equipment));
      }
      if (step === 1) { // Inspection form step
        dispatch(InspectionFormFunction(formData.inspection));
      }

      if (step === 2) { // JobDone form step
        dispatch(JobDoneFormFunction(formData.jobDone));
      }
      // if (step === 3) {
      //   dispatch(CustomerInfoFuntion(formData.customerInfo))
      //   console.log("cssa",formData.customerInfo);
        
      // }
      // Add similar dispatch actions for other forms
    }
    
    if (step < steps.length - 1) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    // Save final form data
    
    const currentData = formData[getCurrentFormKey()];
    if (currentData) {
      // Dispatch final form data
        dispatch(CustomerInfoFuntion(formData.cusotmerInfo))
      console.log("Final form submitted!", formData.cusotmerInfo);
    }
    navigate("/final");
  };

  return (
    <div className="border-2 border-black p-4 mx-auto">
      <div className="flex justify-between mb-4">
        {steps.map((label, index) => (
          <div 
            key={index} 
            className={`px-4 py-2 rounded-full ${step === index ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="p-2">
        {step === 0 && <EquipmentForm onFormDataChange={handleFormDataChange} />}
        {step === 1 && <InspectionForm onFormDataChange={handleFormDataChange} />}
        {step === 2 && <JobDoneForm onFormDataChange={handleFormDataChange} />}
        {step === 3 && <ProtectionSettingsForm onFormDataChange={handleFormDataChange} />}
      </div>

      <div className="flex justify-between mt-4">
        <button 
          onClick={prevStep} 
          disabled={step === 0} 
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
        >
          Back
        </button>
        {step === steps.length - 1 ? (
          <button 
            onClick={handleSubmit} 
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit
          </button>
        ) : (
          <button 
            onClick={nextStep} 
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save & Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;