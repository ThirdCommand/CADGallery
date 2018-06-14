import * as APIUtil from '../util/project_util';
import { createPictures } from './picture_actions';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_CREATED_PROJECT_ID = "RECEIVE_CREATED_PROJECT_ID"


export const fetchProject = (projectId) => {
  return (dispatch) => {
    return APIUtil.fetchProject(projectId).then((project) => {
      return dispatch(receiveProject(project))
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON))
    })
  }
}

export const fetchProjects = () => {
  return (dispatch) => {
    return APIUtil.fetchProjects().then((projects) => {
      return dispatch(receiveProjects(projects))
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON))
    })
  }
}

// refactor to handle errors
// add deletion of project if pictures fail to save and all that
// in the back end
export const createProject = (rawProject) => {
  return (dispatch) => {
    return APIUtil.createProject(rawProject).then((project) => {
      return dispatch(receiveProject(project))
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

const receiveProjects = (projects) => {
  return {
    type: RECEIVE_PROJECTS,
    projects
  }
}

const receiveCreatedProjectID = (projectId) => {
  return {
    type: RECEIVE_CREATED_PROJECT_ID,
    projectId
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  }
}
