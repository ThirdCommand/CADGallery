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
        <Link to="/" className="nav-logo-link"><span>LOGOLINK</span></Link>
        <Link to="/signin" className="signin-link"><span> Sign In</span></Link>
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