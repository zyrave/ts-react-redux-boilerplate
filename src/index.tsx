import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Reducer } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import { enthusiasm } from './reducers';
import { StoreState } from './types';

import Hello from './containers/Hello';

const store = createStore(enthusiasm as Reducer<StoreState>, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
