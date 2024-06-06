import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import FormPage from './FormPage';
import ResultPage from './ResultPage';

function App() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;




/*Create a simulated web application running a random timer using service worker which returns a boolean. In case of true, open a new window where a timer runs until the window is closed. When closed, store the last timer value in the local storage. While the timer window is opened, the main window should open a new route/page containing two form field and a submit button but you should also be able to navigate to other route as wish. Clicking on the submit button will close the other window if opened and show the entered form field and timer values in a new route.
 */
