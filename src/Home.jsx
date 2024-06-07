import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [timerMessage, setTimerMessage] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [timerFailed, setTimerFailed] = useState(false);

  useEffect(() => {
    if (
      isStarted &&
      "serviceWorker" in navigator &&
      navigator.serviceWorker.controller
    ) {
      navigator.serviceWorker.controller.postMessage("startRandomTimer");

      const messageHandler = (event) => {
        if (event.data.result) {
          setTimerMessage("Random timer completed. Boolean Value: true");

          const timerWindow = window.open(
            "/timer.html",
            "TimerWindow",
            "width=300,height=200"
          );
          window.timerWindow = timerWindow; // Store the reference globally

          const timerUnloadHandler = () => {
            const lastTimerValue = localStorage.getItem("lastTimerValue");
            localStorage.setItem("lastTimerValue", lastTimerValue);
            navigate("/form");
          };

          timerWindow.addEventListener("beforeunload", timerUnloadHandler);

          // Automatically navigate to the form page
          navigate("/form");

          return () => {
            timerWindow.removeEventListener("beforeunload", timerUnloadHandler);
          };
        } else {
          setTimerMessage(`Random timer completed. Boolean Value: false.`);
          setTimerFailed(true); // Set the timerFailed flag to true
          setIsStarted(false); // Reset isStarted to allow re-running useEffect
         
        }
      };

      navigator.serviceWorker.addEventListener("message", messageHandler);

      return () => {
        navigator.serviceWorker.removeEventListener("message", messageHandler);
      };
    }
  }, [isStarted, navigate]);

  const startApp = () => {
    if (timerFailed) {
      setTimerFailed(false); // Reset the timerFailed flag
    }
    setIsStarted(true); // Set isStarted to true to trigger useEffect
  };

  const refreshPage = () => {
    if (timerFailed) {
      setTimerFailed(false); // Reset the timerFailed flag
    }
    setIsStarted(true); // Set isStarted to true to trigger useEffect
    setTimerMessage("  Wait for the random timer to complete...");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-8 px-4 bg-gradient-to-r from-blue-500 to-green-300">
      <h1 className="text-4xl font-bold text-white">Welcome to Random Timer</h1>
      <p className="max-w-3xl text-lg  text-white">
        Rules: Make sure your pop-up blocker is unblocked. And When the boolean
        value is false make sure to click the start again button
        to start the app again.
      </p>

      {timerFailed ? (
        <button
          onClick={refreshPage}
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Start Again
        </button>
      ) : (
        <button
          onClick={startApp}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start the App
        </button>
      )}

      {timerMessage ? (
        <p className="text-lg font-semibold text-white">{timerMessage}</p>
      ) : isStarted ? (
        <p className="text-lg font-semibold text-white">
          Wait for the random timer to complete...
        </p>
      ) : null}
    </div>
  );
}

export default Home;
