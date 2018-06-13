import merge from 'lodash/merge'
import { RECEIVE_PICTURE_ERRORS, CLEAR_ERRORS } from "../actions/picture_actions";

export default (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_PICTURE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}
