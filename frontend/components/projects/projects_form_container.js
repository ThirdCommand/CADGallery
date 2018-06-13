import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import { createProject, clearErrors } from '../../actions/project_actions';
import ProjectForm from './project_form'
import { createProjectPictures } from '../../actions/picture_actions';
const mapStateToProps = (state) => {
  return {
    errors: state.errors.project,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    createProject: (project) => dispatch(createProject(project)),
    createProjectPictures: (projectPictures) => dispatch(createProjectPictures(projectPictures))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)

