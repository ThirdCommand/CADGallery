import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupFormContainer from './session_form/signup_form_container';
import SigninFormContainer from './session_form/signin_form_container';
import SigninFormPasswordContainer from './session_form/signin_form_password_container';
const App = () => (
  <div className="everything">
    <header>
      <NavBarContainer/>
    </header>
    <Switch>
      <AuthRoute exact path="/signin" component={SigninFormContainer} />
      <AuthRoute exact path="/signinpassword" component={SigninFormPasswordContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;

