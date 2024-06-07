import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  const [timerMessage, setTimerMessage] = useState('');

  useEffect(() => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage('startRandomTimer');

      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data.result) {
          setTimerMessage('Random timer completed. Result: true');

          const timerWindow = window.open('/timer.html', 'TimerWindow', 'width=300,height=200');
          window.timerWindow = timerWindow; // Store the reference globally

          const timerUnloadHandler = () => {
            const lastTimerValue = localStorage.getItem('lastTimerValue');
            localStorage.setItem('lastTimerValue', lastTimerValue);
            navigate('/form');
          };

          timerWindow.addEventListener('beforeunload', timerUnloadHandler);

          // Automatically navigate to the form page
          navigate('/form');

          return () => {
            timerWindow.removeEventListener('beforeunload', timerUnloadHandler);
          };
        } else {
          setTimerMessage('Random timer completed. Result: false');
        }
      });
    }
  }, [navigate]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Make sure your popup is unblocked</h1>
      {timerMessage ? <p>{timerMessage}</p> : <p>Wait for the random timer to complete.</p>}
    </div>
  );
}

export default Landing;
