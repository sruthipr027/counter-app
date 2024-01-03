import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // to make store globally accessible we should place app in provider tag

  <React.StrictMode>
   
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>
);

