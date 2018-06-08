import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from "../actions/session_actions";
import merge from 'lodash/merge'

export default (state = {id: null}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.currentUser.id};
    case SIGNOUT_CURRENT_USER:
      const nullUser = { id: null }; 
      return nullUser 
    default:
      return state;
  }
}



