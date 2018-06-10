import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const signin = (user) => {
  return (dispatch) => {
    return APIUtil.signin(user).then((user) => {
      return dispatch(receiveCurrentUser(user))
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON))
    })
  }
}

export const signout = () => {
  return (dispatch) => {
    return APIUtil.signout().then(()=> {
      return dispatch(signoutCurrentUser())
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON))
    })
  }
}

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user).then((user) => {
      return dispatch(receiveCurrentUser(user))
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON))
    })
  }
}

export const clearErrors = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAR_ERRORS
    })
  }
}

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser 
  }
}

const signoutCurrentUser = () => {
  return {
    type: SIGNOUT_CURRENT_USER
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}
