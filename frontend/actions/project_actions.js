import * as APIUtil from '../util/project_util';
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const fetchProject = (projectId) => {
  return (dispatch) => {
    return APIUtil.fetchProject(projectId).then((project) => {
      return dispatch(fetchProjects(project))
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON))
    })
  }
}

export const fetchProjects = () => {
  return (dispatch) => {
    return APIUtil.fetchProjects().then(() => {
      return dispatch(signoutCurrentUser())
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON))
    })
  }
}

export const createProject = (project) => {
  return (dispatch) => {
    return APIUtil.createProject(project).then((project) => {
      return dispatch(receiveCurrentUser(user))
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON))
    })
  }
}

export const clearErrors = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAR_ERRORS
    })
  }
}

const receiveProject = (project) => {
  return {
    type: RECEIVE_PROJECT,
    project
  }
}

const receiveProjects = (project) => {
  return {
    type: RECEIVE_PROJECTS,
    projects
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  }
}
