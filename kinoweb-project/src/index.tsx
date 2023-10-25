import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './firebase'

import { store } from './redux/store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();


