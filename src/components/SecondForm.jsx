import { useState } from "react";
import { useDispatch } from "react-redux";
import { InspectionFormFunction } from "./slices/CheckListSlice";

const InspectionForm = ({onFormDataChange}) => {
  const initialData = [
    "Visual Inspection",
    "ACB ON / OFF operation manually",
    "Spring Charging manually",
    "ACB Rack in / out operation (in drawout only)",
    "ACB ON / OFF operation electrically (if available)",
    "Spring Charging Electrically (if available)",
    "Spring charging during Breaker in ON condition",
    "Tripping from Protection release",
    "Any specific problem, reported by customer",
  ].map((item) => ({
    checkpoint: item,
    beforeServiceNotOk: false,
    beforeServiceOk: false,
    afterServiceNotOk: false,
    afterServiceOk: false,
    remarks: "",
  }));

  const [formData, setFormData] = useState(initialData);

  const handleChange = (index, field, value) => {
    const updatedFormData = formData.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setFormData(updatedFormData);
    
    // Notify parent component of data changes
    onFormDataChange(updatedFormData);
  };

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(InspectionFormFunction(formData))
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table className="w-full mb-4  border-black">
        <thead>
          <tr className="border-2 border-black">
            <th className="border p-2">Sr. No.</th>
            <th className="border p-2">Check Points</th>
            <th className="border-2 border-black p-2" colSpan={2}>Before Service</th>
            <th className="border-2 border-black p-2" colSpan={2}>After Service</th>
            <th className="border p-2">Remarks</th>
          </tr>
          <tr>
            <th className="p-2"></th>
            <th className="p-2"></th>
            <th className="border-2 border-black p-2">Not OK</th>
            <th className="border-2 border-black p-2">OK</th>
            <th className="border-2 border-black p-2">Not OK</th>
            <th className="border-2 border-black p-2">OK</th>
            <th className="border-none p-2"></th>
          </tr>
        </thead>
        <tbody>
          {formData.map((row, index) => (
            <tr key={index}>
              <td className="p-2 text-center">{index + 1}</td>
              <td className="p-2">{row.checkpoint}</td>
              <td className="border-2 border-black p-2 text-center">
                <input
                  type="checkbox"
                  checked={row.beforeServiceNotOk}
                  onChange={(e) => handleChange(index, "beforeServiceNotOk", e.target.checked)}
                />
              </td>
              <td className="border-2 border-black p-2 text-center">
                <input
                  type="checkbox"
                  checked={row.beforeServiceOk}
                  onChange={(e) => handleChange(index, "beforeServiceOk", e.target.checked)}
                />
              </td>
              <td className="border-2 border-black p-2 text-center">
                <input
                  type="checkbox"
                  checked={row.afterServiceNotOk}
                  onChange={(e) => handleChange(index, "afterServiceNotOk", e.target.checked)}
                />
              </td>
              <td className="border-2 border-black p-2 text-center">
                <input
                  type="checkbox"
                  checked={row.afterServiceOk}
                  onChange={(e) => handleChange(index, "afterServiceOk", e.target.checked)}
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="w-full p-1 border"
                  value={row.remarks}
                  onChange={(e) => handleChange(index, "remarks", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button> */}
    </form>
  );
};

export default InspectionForm;
