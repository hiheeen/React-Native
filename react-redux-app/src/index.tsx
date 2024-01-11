import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';

import counter from './reducers';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { getCounter } from './reducers/counterError';
import { configureStore } from '@reduxjs/toolkit';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const loggerMiddleWare = (store: any) => (next: any) => (action: any) => {
  console.log('store', store);
  console.log('action', action);
  next(action);
  console.log('state', store.getState());
};
const middleWare = applyMiddleware(loggerMiddleWare);
const store = configureStore({ reducer: rootReducer });

const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          value={store.getState()}
          onIncrease={() => store.dispatch({ type: 'INCREASE' })}
          onDecrease={() => store.dispatch({ type: 'DECREASE' })}
        />
      </Provider>
    </React.StrictMode>
  );
render();
store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
