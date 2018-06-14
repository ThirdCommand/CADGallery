import { RECEIVE_SHOW_PROJECT, RECEIVE_PROJECTS } from "../actions/project_actions";
import merge from 'lodash/merge'
export default (state = {project: {id: null}}, action) => {
  let newState = {};
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SHOW_PROJECT:
      debugger
      return action.project
    case RECEIVE_PROJECTS:
      newState = merge({}, action.projects)
      return newState
    default:
      return state
  }
}