import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(allReducers, applyMiddleware(thunk) );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
