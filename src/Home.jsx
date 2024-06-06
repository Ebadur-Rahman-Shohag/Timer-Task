import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [timerMessage, setTimerMessage] = useState('');

  useEffect(() => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage('startRandomTimer');

      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data.result) {
          setTimerMessage('Random timer completed. Result: true');

          const timerWindow = window.open('/timer.html', 'TimerWindow', 'width=300,height=200');

          const timerUnloadHandler = () => {
            const lastTimerValue = timerWindow.localStorage.getItem('timerValue');
            localStorage.setItem('lastTimerValue', lastTimerValue);
            navigate('/form');
          };

          timerWindow.addEventListener('beforeunload', timerUnloadHandler);

          return () => {
            timerWindow.removeEventListener('beforeunload', timerUnloadHandler);
          };
        }
        setTimerMessage('Random timer completed. Result: false');
      });

    
    }
  }, [navigate]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Home Page</h1>
      {(timerMessage)? <p>{timerMessage}</p>:  <p>Wait for the random timer to complete.</p>}

    </div>
  );
}

export default Home;
