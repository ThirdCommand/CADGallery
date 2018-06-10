import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    console.log(this.errors);
    // <ul>
    //   {this.props.errors.map((error, i) => (
    //     <li key={`error-${i}`}>
    //       {error}
    //     </li>
    //   ))}
    // </ul>
    return (<div></div>
    );
  }

  /*
  
  Sign in
  

  email
  
  new to CADGallery
  NEW TO AUTODESK? {CREATE ACCOUNT}(link)
  NEXT (button)
  
  */

  render() {
    return (
      <div className="signin-form-container">
        <div className="form-header"> <div className="form-header-text">Create Account</div><div className="logo"></div></div>
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          
          {this.renderErrors()}
          <div className="signin-form">
            <br />
            <label className="input-header-text-color">Email </label>
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('email')}
                className="signin-input"
                placeholder="name@example.com"
              />
            <br />
            <label className="input-header-text-color" >Password </label>
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
                placeholder="Password"
              />
            <br />
            <input className="session-submit" type="submit" value="SIGN UP" />
          </div>
          <div className="switch-form-text">
            ALREADY HAVE AN ACCOUNT? 
            <Link className="switch-form-link" to="/signin"> SIGN IN</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);