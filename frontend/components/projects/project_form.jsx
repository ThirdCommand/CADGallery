import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {logoImg} from '../logo';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      user_id: props.currentUser.id
    }
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault;
    const project = Object.assign({}, this.state);
    this.props.processForm(project);
  }

  displayErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    //background color should be 238/238/238
    return (
      <div className="project-form-container">
        <h2 className='form-title'> Create new project</h2> 
        <div className='project-title-form-container'>
          <div className='title-field-label'><label className='input-label' >Project title </label></div>
          <input className='project-title-text-input' type="text"/>
        </div>
        <div className='assets-container'>
          <div><label className='input-field-label'>Project assets </label></div>
          <button className='upload-assets-button'>Upload assets</button>
        </div>
        <div className='project-description-container'>
          <div><label className='input-field-label'>Project description </label></div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button className="publish-button" onClick={this.handleSubmit}>Publish</button>
          <button className='cancel-button'>Cancel</button>
        </div>

      </div>
    );
  }


}

export default withRouter(ProjectForm);