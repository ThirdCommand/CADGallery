import {
  connect
} from 'react-redux';

import ProjectShow from './project_show';
import {
  clearErrors,
  fetchProjects
} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  
  return {
    projects: state.entities.projects
  };
};


const mapDispatchToProps = dispatch => {
  //edit project will exist here... IF I HAD ONE
  return {
    clearErrors: () => dispatch(clearErrors()),
    fetchProjects: () => dispatch(fetchProjects())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);