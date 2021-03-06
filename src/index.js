import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { createStore } from "redux";
import product_data from "./product_data.json";

// population of state
function productData(state = product_data[0]) {
  // Clients is array data
  return state;
}

const store = createStore(productData);

ReactDOM.render(
  <Provider store={store}>
  <img className='stackline-logo' src='https://image4.owler.com/logo/stackline_owler_20170129_010716_original.png' alt='stackline-logo' />
    <App />
  </Provider>,
  document.getElementById("root")
);
// serviceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
