self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activated.');
  });
  
  self.addEventListener('message', (event) => {
    if (event.data === 'startRandomTimer') {
      const randomTime = Math.floor(Math.random() * 5000) + 1000;
      setTimeout(() => {
        event.source.postMessage({ result: Math.random() > 0.5 });
      }, randomTime);
    }
  });
  