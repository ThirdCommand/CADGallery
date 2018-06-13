import { combineReducers } from "redux";
import session from './session_errors_reducer';
import project from './project_errors_reducer';
import picture from './picture_errors_reducer';
export default combineReducers({
  session, 
  project,
  picture
});