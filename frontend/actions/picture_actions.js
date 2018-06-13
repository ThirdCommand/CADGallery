import * as APIUtil from '../util/picture_util';
export const RECEIVE_PICTURES = "RECEIVE_PICTURES";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_PICTURE_ERRORS = "RECEIVE_PICTURE_ERRORS"

export const createProjectPictures = (projectPictures) => {
  return (dispatch) => {
    return APIUtil.createPictures(projectPictures).then(() => {
      return true
    })
    // .then((pictures) => {
    //   return dispatch(receivePictures(pictures))
    // }, (errors) => {
    //   return dispatch(receiveErrors(errors.responseJSON))
    // })
  }
}

export const clearErrors = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAR_ERRORS
    })
  }
}

const receivePictures = (pictures) => {
  return {
    type: RECEIVE_PICTURES,
    pictures
  }
}



const receiveErrors = (errors) => {
  return {
    type: RECEIVE_PICTURE_ERRORS,
    errors
  }
}