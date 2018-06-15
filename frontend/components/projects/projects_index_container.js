import { connect } from 'react-redux';


import { clearErrors, fetchProjects } from '../../actions/project_actions';
import ProjectIndex from './project_index';

const mapStateToProps = (state, ownProps) => {
  
  return {
    projects: Object.values(state.entities.projects)
  };
};


const mapDispatchToProps = dispatch => {
  //edit project will exist here... IF I HAD ONE
  return {
    clearErrors: () => dispatch(clearErrors()),
    fetchProjects: () => dispatch(fetchProjects())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);