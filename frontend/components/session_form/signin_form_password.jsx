import React from 'react';
import { withRouter } from 'react-router-dom';

class SigninPasswordForm extends React.Component {
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
        <form onSubmit={this.handleSubmit} className="signin-form-box">

          <br />
          {this.props.navLink}
          {this.renderErrors()}
          <div className="signin-form">
            <br />
            <label>Email:
              <input type="text"
                value={this.state.username}
                onChange={this.update('email')}
                className="signin-input"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SigninPasswordForm);