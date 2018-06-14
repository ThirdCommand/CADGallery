import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import { createProject, clearErrors } from '../../actions/project_actions';
import ProjectForm from './project_form'
import { createProjectPictures } from '../../actions/picture_actions';
const mapStateToProps = (state) => {

  let projectId = state.entities.showProject.project.id
  return {
    errors: state.errors.project,
    currentUser: state.entities.users[state.session.id],
    redirectProjectId: projectId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)

