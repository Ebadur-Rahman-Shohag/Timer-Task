import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const { field1, field2, timerValue } = location.state || {};

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Result Page</h1>
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-200 rounded-lg shadow-md p-4">
            <p className="text-lg font-semibold text-gray-800">Field 1:</p>
            <p className="text-lg text-gray-900">{field1}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-200 rounded-lg shadow-md p-4">
            <p className="text-lg font-semibold text-gray-800">Field 2:</p>
            <p className="text-lg text-gray-900">{field2}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-200 rounded-lg shadow-md p-4">
            <p className="text-lg font-semibold text-gray-800">Timer Value:</p>
            <p className="text-lg text-gray-900">{timerValue}</p>
          </div>
        </div>
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

export default ResultPage;
