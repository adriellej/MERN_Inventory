import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { DevicesContextProvider } from './context/DevicesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <DevicesContextProvider>
    <App />
  </DevicesContextProvider>
  </React.StrictMode>
);

