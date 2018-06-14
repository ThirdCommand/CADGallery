import { connect } from 'react-redux';

import ProjectShow from './project_show';
import { clearErrors, fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  let projectId = ownProps.match.params.projectId
  return {
    projectId,
    project: state.entities.showProject.project,
    pictures: Object.values(state.entities.showProject.pictures),
    projectOwner: state.entities.showProject.user,
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.project,
  };
};


const mapDispatchToProps = dispatch => {
  //edit project will exist here... IF I HAD ONE
  return {
    clearErrors: () => dispatch(clearErrors()),
    fetchProject: (id) => dispatch(fetchProject(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);