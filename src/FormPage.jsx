import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormPage() {
  const [formData, setFormData] = useState({ field1: "", field2: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.timerWindow) {
      window.timerWindow.close();
    }
    const lastTimerValue = localStorage.getItem("lastTimerValue");
    navigate("/result", { state: { ...formData, timerValue: lastTimerValue } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-center mb-6">Form Page</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Field 1
            </label>
            <input
              type="text"
              name="field1"
              value={formData.field1}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Field 2
            </label>
            <input
              type="text"
              name="field2"
              value={formData.field2}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
