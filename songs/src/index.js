import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducers from './Reducers';

ReactDOM.render(
  // wrap root component in a provider component from react-redux library
  // we create our Redux Store by calling the createStore(our_reducers) and passing it our reducers
  // to interact with the store, everything is now done through the provider.
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// cofigure Redux and React-Redux
