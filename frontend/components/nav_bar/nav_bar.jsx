import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  signedinNav () {
    return (
      <div>
        <Link to="/" className="nav-logo-link"><span>LOGOLINK</span></Link>
        <button className="nav-signout-button" onClick={this.props.signout}>Log Out</button>
      </div>
    );
  }
  

  signedoutNav() {
    return (
      <div className="nav-bar-container">
        <Link to="/" className="nav-logo-link">
          <div className="nav-logo"></div>
          <div calssName="nav-logo-text">CADGallery</div>
        </Link>
        <Link to="/signin" className="signin-button-link">
          <div className="signin-icon"></div>
          <div className="session-link-text">Sign In</div>
        </Link>
      </div>
    );
  }
  
    
  render() {
    console.log(this.props.currentUser);
    return this.props.currentUser ? this.signedinNav() : this.signedoutNav()
    //return <div> {this.signedoutNav()} </div> 
    // console.log(this.props);
    // switch (this.props.match) {
    //   // case ():
    //   //   return this.signedinNav()
    //   default:
    //     return this.signupinNav()
    // }
  };
}
export default NavBar;