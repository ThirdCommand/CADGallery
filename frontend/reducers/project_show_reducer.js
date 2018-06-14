import { RECEIVE_SHOW_PROJECT, RECEIVE_PROJECTS } from "../actions/project_actions";
import merge from 'lodash/merge'
export default (state = {project: {id: null}, pictures:{}}, action) => {
  let newState = {};
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SHOW_PROJECT:
      return action.project
    default:
      return state
  }
}