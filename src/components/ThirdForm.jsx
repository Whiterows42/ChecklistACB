import { useState } from "react";
import { useDispatch } from "react-redux";
import { JobDoneFormFunction } from "./slices/CheckListSlice";

const JobDoneForm = ({onFormDataChange}) => {
  const jobList = [
    "Dismantling /cleaning & reassembling of front cover",
    "Dismantling /cleaning & reassembling of arc chute.",
    "Dismantling /cleaning /greasing & reassembling of charging motor",
    "Dismantling /cleaning & reassembling of closing coil -XF",
    "Dismantling /cleaning & reassembling of tripping coil -MX",
    "Dismantling /cleaning & reassembling of undervoltage coil -MN",
    "Dismantling /cleaning & reassembling of Protection release.",
    "Physical inspection & cleaning of the main contacts",
    "Physical inspection/cleaning & greasing of main mechanism .",
    "Inspection of main spring / tripping spring / locking spring",
    "Inspection /cleaning & greasing of charging handle",
    "Inspection of the rear terminals of the breaker & greasing them.",
    "Inspection / cleaning of the changeover contacts of the OF switch",
    "Inspection of clusters, cleaning & greasing.",
    "Inspection / Cleaning & greasing racking mechanism of Chassis",
    "Inspection & tightening the rear terminals of the chassis.",
    "Checking the healthiness of CT Connection.",
    "Cleaning & inspection of PF switch",
    "Cleaning & checking of CE/CT/CD position switches",
    "Cleaning & checking of tightness of wires on WAGO terminal.",
    "Testing of Protection system with secondary test kit.",
    "Physical inspection of mechanical spring charging indication.",
    "Physical inspection of mechanical ON/OFF indication."
  ];

  const [formData, setFormData] = useState(
    jobList.map((i) => ({
    job:i,
      yes: false,
      no: false,
      remarks: ""
    }))
  );

  const handleCheckboxChange = (index, field) => {
    const updatedFormData = formData.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          yes: field === 'yes' ? !item.yes : false,
          no: field === 'no' ? !item.no : false,
          remarks: item.remarks
        };
      }
      return item;
    });
    
    setFormData(updatedFormData);
    // Notify parent component of changes
    onFormDataChange(updatedFormData);
  };

  const handleRemarksChange = (index, value) => {
    const updatedFormData = formData.map((item, i) => 
      i === index ? { ...item, remarks: value } : item
    );
    
    setFormData(updatedFormData);
    // Notify parent component of changes
    onFormDataChange(updatedFormData);
  };

  const dispatch = useDispatch()
  const handleSubmit = () => {

    dispatch(JobDoneFormFunction(formData))
    console.log("Form Data:", formData);
  };

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="w-full border-none mb-4">
          <thead>
            <tr className="border-2 border-black">
              <th className="p-2 w-16">Sr. No.</th>
              <th className="p-2">Job Done</th>
              <th className="p-2 w-20">Yes</th>
              <th className="p-2 w-20">No</th>
              <th className="p-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {jobList.map((job, index) => (
              <tr key={index} className="border">
                <td className="p-2 text-center">{index + 1}</td>
                <td className="p-2">{job}</td>
                <td className="p-2 text-center">
                  <input
                    type="checkbox"
                    checked={formData[index].yes}
                    onChange={() => handleCheckboxChange(index, "yes")}
                    className="h-4 w-4"
                  />
                </td>
                <td className="p-2 text-center">
                  <input
                    type="checkbox"
                    checked={formData[index].no}
                    onChange={() => handleCheckboxChange(index, "no")}
                    className="h-4 w-4"
                  />
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    className="w-full border p-1"
                    value={formData[index].remarks}
                    onChange={(e) => handleRemarksChange(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="flex justify-center mt-4">
        <button 
          onClick={handleSubmit} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div> */}
    </div>
  );
};

export default JobDoneForm;