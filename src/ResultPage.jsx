import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const { field1, field2, timerValue } = location.state || {};

  return (
    <div>
      <h1 className="text-2xl font-bold">Result Page</h1>
      <p>Field 1: {field1}</p>
      <p>Field 2: {field2}</p>
      <p>Timer Value: {timerValue}</p>
    </div>
  );
}

export default ResultPage;
