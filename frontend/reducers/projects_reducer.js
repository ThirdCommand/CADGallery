import {RECEIVE_PROJECTS } from "../actions/project_actions";
import merge from 'lodash/merge'
export default (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PROJECTS:
      newState = action.projects
      return newState
    default:
      return state
  }
}