import { combineReducers } from "redux";
import users from './users_reducer';
import showProject from './project_show_reducer';

export default combineReducers({
  users,
  showProject,
});
