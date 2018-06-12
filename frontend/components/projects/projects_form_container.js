import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import { createProject, clearErrors } from '../../actions/project_actions';
import ProjectForm from './project_form'
const mapStateToProps = (state) => {
  return {
    errors: state.errors.project,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)

