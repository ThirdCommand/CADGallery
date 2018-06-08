import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, signout, signin}) => {

  const sessionLinks = () => (
    <div>
      <button className="signin-signup-button">Sign In</button>
      <Link to="/signin">Sign In</Link>
        &nbsp;or&nbsp; 
      <h4 className="signup-text">NEW TO CADGALLERY?</h4><Link className="signup-signin-link" to="/signup">CREATE ACCOUNT</Link>
    </div>
  );

  // if signed in, no need for signin link sprite
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hello!?, hello, {currentUser.first_name}!</h2>
      <button className="header-name" onClick={signout}>Log Out</button>
    </hgroup>
  );

  const signedinNav = () => (
    <div>
      <Link to="/" className="header-link"><span>LOGOLINK</span></Link>
      <span>NAV BAR</span>
      <button className="header-name" onClick={signout}>Log Out</button>
    </div>
  )

  const signedoutNav = () => (
    <div>
      <Link to="/" className="header-link"><span>LOGOLINK</span></Link>
      <span>NAV BAR</span>
      <Link to="/signin">sign in</Link>
    </div>
  )
  return currentUser ? signedinNav() : signedoutNav();
};

export default NavBar;