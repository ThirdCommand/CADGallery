import { RECEIVE_PROJECT_ERRORS, CLEAR_ERRORS } from '../actions/project_actions';
import merge from 'lodash/merge'

export default (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};