import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from "../actions/project_actions";
import merge from 'lodash/merge'
export default (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_PROJECT:
      newState = merge({},state)
      return merge({},newState,{[action.project.id]: action.project})
    case RECEIVE_PROJECTS:
      newState = merge({}, projects)
      return newState
    default:
      return state
  }
}