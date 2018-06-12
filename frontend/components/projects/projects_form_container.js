import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import { createProject, clearErrors } from '../../actions/project_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.project,
    currentUser: state.session.
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)()

