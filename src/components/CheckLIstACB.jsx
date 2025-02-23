import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
const ACBChecklist = () => {


    const EquipmentForm = useSelector((state) => state.counter.EquipmentForm)
    const InspectionForm = useSelector((state) => state.counter.InspectionForm)
    const JobDoneForm = useSelector((state) => state.counter.JobDoneForm)
    const CustomerInfo = useSelector((state) => state.counter.CustomerInfo)
console.log("insepectionform",InspectionForm);

console.log("customerinfo",CustomerInfo);


const checklistRef = useRef(null);

  // Function to generate PDF
  const generatePDF = () => {
    const input = checklistRef.current;
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let position = 0;
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

      pdf.save("ACB_Checklist.pdf");
    });
  };


  return (
    <div className="w-full ">

<button
        className="bg-blue-500 text-white px-4 py-2 mb-4"
        onClick={generatePDF}
      >
        Download PDF
      </button>


<div ref={checklistRef} className="w-full  border-2 border-black bg-white">

      <h2 className="text-xl font-bold text-center mb-4">
        CHECK LIST FOR ACB SERVICING
      </h2>

      {/* Customer & Equipment Details */}
      <div className="w-full pr-5">
  <div className="flex gap-[40rem]">
    <div className="font-bold">PO No: {EquipmentForm?.poNo}</div>
    <div className="font-bold">QA No: {EquipmentForm?.qaNo}</div>
  </div>

  <div className="font-bold flex">Customer Name & Location: {EquipmentForm?.customerName} </div>

  <div className="flex justify-between w-full">
    <div className="font-bold">Equipment Type: {EquipmentForm?.equipmentType}</div>
    
    <div className="flex  gap-[30rem]">
    <div className="font-bold">Feeder No.: {EquipmentForm?.feederNo}</div>
    <div className="font-bold">Mtc. Done on: {EquipmentForm?.mtcDoneOn}</div>
    </div>
    
  </div>

  <div className="flex justify-between w-full">
    <div className="font-bold">Rating: {EquipmentForm?.rating}</div>
    <div className="font-bold">Serial No.: {EquipmentForm?.serialNo}</div>
    <div className="font-bold">Panel No: {EquipmentForm?.panelNo}</div>
    <div className="font-bold">Next Due on: {EquipmentForm?.nextDueOn}</div>
  </div>

  <div className="flex justify-between w-full">
    <div className="font-bold">Production Release:- </div>
    <div className="font-bold">Static: {EquipmentForm?.static}</div>
    <div className="font-bold">Thermal: {EquipmentForm?.thermal}</div>
  </div>

  <div className="flex flex-wrap justify-between w-full mt-4">
    <div className="font-bold">Production Settings: </div>
    <div className="font-bold">Ir {EquipmentForm?.ir}</div>
    <div className="font-bold">Tr {EquipmentForm?.tr}</div>
    <div className="font-bold">Isd {EquipmentForm?.isd}</div>
    <div className="font-bold">Tsd {EquipmentForm?.tsd}</div>
    <div className="font-bold">II {EquipmentForm?.ii}</div>
    <div className="font-bold">Ig {EquipmentForm?.ig}</div>
    <div className="font-bold">Tg {EquipmentForm?.tg}</div>
  </div>

  <div className="flex flex-wrap justify-between w-full mt-4 mb-4">
    <div className="font-bold">FFTK CURRENTS:    </div>
    <div className="font-bold">Ir {EquipmentForm?.irA}A</div>
    <div className="font-bold">Sec {EquipmentForm?.irSec}  Isd {EquipmentForm?.isdA}A</div>
    <div className="font-bold">Sec {EquipmentForm?.isdSec} II {EquipmentForm?.iiA} A</div>
    <div className="font-bold">Sec {EquipmentForm?.iiSec} Ig {EquipmentForm?.igA} A</div>
    <div className="font-bold">Sec {EquipmentForm?.igSec}</div>
  </div>
</div>

      

      {/* Checkpoints Section */}
      <table className="w-full  mb-4">
        <thead>
          <tr className="border-2 border-black">
            <th className="border p-2">Sr. No.</th>
            <th className="border p-2">Check Points</th>
            <th className="border-2 border-black p-2" colSpan={2}>Before Service</th>
            <th className="border-2 border-black p-2" colSpan={2}>After Service</th>
            <th className="border p-2">Remarks</th>
          </tr>
          <tr className="">
            <th className=" p-2"></th>
            <th className=" p-2"></th>
            <th className="border-2 border-r-0 border-b-0 border-black p-2">Not OK</th>
            <th className="border-2 border-l-0 border-b-0 border-black p-2">OK</th>
            <th className="border-2 border-r-0 border-b-0 border-black p-2">Not OK</th>
            <th className="border-2 border-l-0 border-b-0 border-black p-2">OK</th>
            <th className="border-none p-2"></th>
          </tr>
        </thead>
        <tbody>
          { InspectionForm && InspectionForm.length > 0 && InspectionForm.map((item, index) => (
            <tr key={index} className="">
              <td className="font-bold px-2 text-center">{index + 1}</td>
              <td className=" px-2 text-left">{item.checkpoint}</td>
              <td className="border-2 border-black border-r-0 border-l-1 border-b-0 border-t-0 px-2 text-center"><input type="checkbox" checked={item.beforeServiceNotOk} readOnly /></td>
              <td className="border-2 border-black border-r-1 border-l-0 border-b-0 border-t-0 px-2 text-center"><input type="checkbox" checked={item.beforeServiceOk} readOnly /></td>
              <td className=" px-2 text-center"><input type="checkbox" checked={item.afterServiceNotOk} readOnly /></td>
              <td className="border-2 border-black border-r-1 border-l-0 border-b-0 border-t-0 px-2 text-center"><input type="checkbox" checked={item.afterServiceOk} readOnly  /></td>
              <td className=" px-2"> <p>{item.remarks || '_______________'}</p> </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Job Done Section */}

      <div className="border-2 border-black">
      <table className="w-full border-none mb-4">
        <thead>
          <tr className="border-2 border-black">
            <th className=" p-2">Sr. No.</th>
            <th className=" p-2">Job Done</th>
            <th className=" p-2">Yes</th>
            <th className=" p-2">No</th>
            <th className=" p-2">Remarks</th>
          </tr>
        </thead>
        <tbody>
          { JobDoneForm && JobDoneForm.length > 0 && JobDoneForm.map((item, index) => (
            <tr key={index} className="">
              <td className=" p-2 font-bold text-center">{index + 1}</td>
              <td className=" py-2 text-left">{item.job}</td>
              <td className=" p-2 text-center"><input type="checkbox" checked={item.yes} readOnly /></td>
              <td className=" p-2 text-center"><input type="checkbox" checked={item.no} readOnly /></td>
              <td className=" p-2"> <p className="" >{item.remarks || '_______________'}</p> </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex">
        <h3 className="text-lg font-semibold mb-2">Remarks:</h3>
      </div>

      <div className="flex gap-[20rem] mt-6">
        <div className="flex flex-col self-start">
          <p className="font-semibold">Signature of Customer:</p>
          <p className="font-semibold">Name: {CustomerInfo?.customerName}</p>
          <p className="font-semibold"> Mobile No.: {CustomerInfo?.customerMobile}</p>
        </div>
        <div>
          <p className="font-semibold">Signature of Schneider Representative:</p>
          <p className="font-semibold">Name: {CustomerInfo?.representativeName}</p>
          <p className="font-semibold">Mobile No.: +91 {CustomerInfo?.representativeMobile}</p>
        </div>
      </div>
</div>
      {/* Signature Section */}
</div>
    </div>
  );
};

export default ACBChecklist;
