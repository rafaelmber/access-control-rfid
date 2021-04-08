import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import initialState from './initialState';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer, initialState);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
