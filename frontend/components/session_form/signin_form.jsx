import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {logoImg} from '../logo';


class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
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

  demoSubmit(e) {
    e.preventDefault();
    const user = {email: "DemoUser@demo.user", password: "password"}
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
        <label>{this.props.errors[0] ? `${this.props.errors[0]}` : ""}</label>
        <div className="form-header"> <div className="form-header-text">Sign in</div><div className="logo"></div></div>
        <div className="signin-form-box">

          <div className="signin-form">
            <label className="input-header-text-color">Email </label>
            <input type="text"
              value={this.state.username}
              onChange={this.update('email')}
              className="signin-input"
              placeholder="name@example.com"
            />
            <label className="input-header-text-color">Password </label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="signin-input"
              placeholder="Password"
            />
            <button className="session-submit" onClick={this.handleSubmit}>SIGN IN </button>
            <button className="session-demo-submit" onClick={this.demoSubmit}>DEMO USER </button>
          </div>

          <div className="switch-form-text" >
              NEW TO CADGALLERY? 
              <Link 
                className="switch-form-link" to="/signup">
                CREATE ACCOUNT
              </Link>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(SigninForm);