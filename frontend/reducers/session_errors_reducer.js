

import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";
import merge from 'lodash/merge'


const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;


// import { combineReducers } from "redux";

// const errorsReducer = combineReducers({
//   session: sessionErrorsReducer
// })

// export default errorsReducer;