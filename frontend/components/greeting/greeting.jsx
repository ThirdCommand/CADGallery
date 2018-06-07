import React from 'react';
import { Link } from 'react-router-dom';
// &nbsp ..?

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <nav className="signin-signup">
      <Link to="/signin">Sign In</Link>
        &nbsp;or&nbsp; 
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hello!?, hello, {currentUser.username}!</h2>
      <button className="header-name" onClick={logout}>Log Out</button>
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;