import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupFormContainer from './session_form/signup_form_container';
import SigninFormContainer from './session_form/signin_form_container';
import SigninFormPasswordContainer from './session_form/signin_form_password_container';
import SignupinNavBarContainer from './nav_bar/signupin_nav_bar_container';
import ProjectFormContainer from './projects/projects_form_container';
import ProjectShowContainer from './projects/projects_show_container';
import ProjectIndexContainer from './projects/projects_index_container';
const App = () => (
  <div className="everything">
    <Switch>
      <AuthRoute exact path="/signup" component={SignupinNavBarContainer}/>
      <AuthRoute exact path="/signin" component={SignupinNavBarContainer}/>
      <Route path="/projects/:projectId" component={NavBarContainer}/>
      <Route path="/" component={NavBarContainer}/>
    </Switch>
    <Switch>
      <ProtectedRoute exact path="/projects/new" component={ProjectFormContainer}/>
      <Route path="/projects/:projectId" component={ProjectShowContainer}/>
      <AuthRoute exact path="/signin" component={SigninFormContainer} />
      <AuthRoute exact path="/signinpassword" component={SigninFormPasswordContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={ProjectIndexContainer} />
    </Switch>
  </div>
);

export default App;

