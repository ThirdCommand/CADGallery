import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from "../actions/project_actions";
import merge from 'lodash/merge'
export default (state = {}, action) => {
  let newState = {};
  Object.freeze(state)


  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({},state,action.project)
    case RECEIVE_PROJECTS:
      newState = merge({}, action.projects)
      return newState
    default:
      return state
  }
}