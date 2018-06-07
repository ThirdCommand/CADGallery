import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { signin, signout, signup } from './actions/session_actions';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.signin = signin;
  window.signout = signout;
  window.signup = signup;
  window.getState = store.getState; // for testing
  window.dispatch = store.dispatch; // for testing
  ReactDOM.render(<Root store={store}/>, root);
});