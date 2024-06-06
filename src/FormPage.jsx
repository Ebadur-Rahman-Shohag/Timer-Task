import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage() {
  const [formData, setFormData] = useState({ field1: '', field2: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.timerWindow) {
      window.timerWindow.close();
    }
    navigate('/result', { state: { ...formData, timerValue: localStorage.getItem('lastTimerValue') } });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Field 1</label>
          <input
            type="text"
            name="field1"
            value={formData.field1}
            onChange={handleChange}
            className="border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block">Field 2</label>
          <input
            type="text"
            name="field2"
            value={formData.field2}
            onChange={handleChange}
            className="border p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
