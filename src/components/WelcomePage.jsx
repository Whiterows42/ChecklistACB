import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Checklist ACB</h1>
        <p className="text-gray-700 mb-6">
          This checklist will guide you through the necessary steps to complete your equipment and inspection process efficiently.
        </p>
        <button
          onClick={() => navigate("/checklistform")}
          className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-600 transition"
        >
          Start Checklist
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
