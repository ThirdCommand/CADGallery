import * as APIUtil from '../util/picture_util';
export const RECEIVE_PICTURES = "RECEIVE_PICTURES";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

export const createPictures = (pictures) => {
  return (dispatch) => {
    return APIUtil.createPictures(pictures).then((pictures) => {
      return dispatch(receivePictures(pictures))
    }, (errors) => {
      return dispatch(receiveErrors(errors.responseJSON))
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
    type: RECEIVE_ERRORS,
    errors
  }
}