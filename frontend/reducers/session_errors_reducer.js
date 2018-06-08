

import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";
import merge from 'lodash/merge'


export default (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      console.log(action);
      
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};


// import { combineReducers } from "redux";

// const errorsReducer = combineReducers({
//   session: sessionErrorsReducer
// })

// export default errorsReducer;