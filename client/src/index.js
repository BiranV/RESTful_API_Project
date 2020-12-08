import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const iniState = {
  siteName: "Storee"
}

const reducer = (state = iniState, action) => {

  switch (action.type) {
    case "CHANGE_SITE_NAME":
      state = { ...state, siteName: action.payload }
      break;
  }
  return state;
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);



