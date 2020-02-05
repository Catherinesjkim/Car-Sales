import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import headerReducer from './reducers/headerReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

// Step 2 - create a store and connect it to our app
// use createStore function
const store = createStore(headerReducer);
console.log(store.getState()); // if you see your initialState object in the console.log, you set up the store correctly.

// Step 2a - Provide the store to your app
// use the <Provider /> component and pass in your store

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);
