import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch((error) => {
    console.log('Service Worker registration failed:', error);
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
