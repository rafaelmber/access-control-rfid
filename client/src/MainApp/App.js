import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import initialState from './initialState';
import reducers from './reducers';
import { CssVariables } from './CssVariables';
import MainDisplay from '../MainApp/MainDisplay/MainDisplay';
const store = createStore(reducers, initialState);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssVariables>
          <MainDisplay />
        </CssVariables>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
