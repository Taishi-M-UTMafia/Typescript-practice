import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
import TestForm from './components/test_form'

// import { App } from './components/app';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <TestForm />
  </Provider>,
  document.querySelector('.container')
);
