import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState; // for testing
  window.dispatch = store.dispatch; // for testing
  ReactDOM.render(<h1>RRR window NNN</h1>, root);
  
});