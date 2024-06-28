import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/slices/Store';
import { Toaster } from 'react-hot-toast'; // Import Toaster from react-hot-toast

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Toaster position="top-right" /> {/* Position and other props can be adjusted as per your need */}
      <App />
    </Provider>
  </BrowserRouter>
);
