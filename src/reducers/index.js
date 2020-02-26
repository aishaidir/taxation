
/* eslint-disable comma-dangle */
import { combineReducers } from "redux";
import isAuthenticated from "./authentication.reducer";
import initSignup from "./initialSignup.reducer";
import signUpCompletion from "./completeSignUp.reducer";
import updateBreadcrumb from "./breadcrumbReducer";

export const reducers = {
  isAuthenticated,
  initSignup,
  signUpCompletion,
  updateBreadcrumb,
};

const rootReducer = combineReducers({
  ...reducers
});

export default rootReducer;
