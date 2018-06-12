import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  //refactor for signed in signed out
  //refactor to allow url display
  signedinNav () {
    return (
      <div className="nav-bar-container">
        <Link to="/" className="nav-logo-link">
          <div className="nav-logo"></div>
          <div className="nav-logo-text">CADGallery</div>
        </Link>
        <button onClick={() => this.props.signout()} className="signinout-button-link">
          <div className="signout-icon"></div>
          <div className="session-link-text">Sign out</div>
        </button>
      </div>
    );
  }

  signedoutNav() {
    return (
      <div className="nav-bar-container">
        <Link to="/" className="nav-logo-link">
          <div className="nav-logo"></div>
          <div className="nav-logo-text">CADGallery</div>
        </Link>
        <Link to="/signin" className="signinout-button-link">
          <div className="signin-icon"></div>
          <div className="session-link-text">Sign In</div>
        </Link>
      </div>
    );
  }
  
    
  render() {
    return this.props.currentUser ? this.signedinNav() : this.signedoutNav()
  };
}
export default NavBar;