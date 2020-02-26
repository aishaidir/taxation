import {
  fetchLogin,
  fetchLoginrequest,
  logout,
  fetchLoginInvalid,
  fetchRefreshRequest,
} from '../actions/authentication.action'
import { login } from '../API/authentication';
import { history } from '../App';
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'
import { dispatchAndRefresh } from './initSignUp.helper';
const { status } = API
const { SIGN_IN_INVALID, NETWORK_FAILURE } = ERROR_MESSAGE;

/**
 * - Remove tokens from session
 */
export const clearSession = () => {
  try {
    sessionStorage.removeItem("access-token");
    sessionStorage.removeItem("refresh-token");
    sessionStorage.removeItem("user-token");
  } catch (error) {
    console.log(error);
  }
};

/**
 * - Check is there is an active session
 * - Relies on access-token for methods without access to the redux store
 * @return {Boolean}
 */
export const isSessionActive = () => {
  let token;
  try {
    token = sessionStorage.getItem("access-token");
  } catch (error) {
    return false;
  }
  return Boolean(token);
};

/**
 * @param set timeout when network calls loading for too long say > 4sec
 *
 * @returns {Promise}
 */
export const timeout = (ms, promise) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(ERROR_MESSAGE.TIMEOUT);
    }, ms);
    promise.then(resolve, reject);
  });

export const userLogin = credentials => (dispatch, getState) => {
  dispatch(fetchLoginrequest());
  setTimeout(() => {
    if (credentials) {
      const username = credentials.email;
      const { password } = credentials;
      return timeout(30000, login(username, password))
        .then(data => {
          sessionStorage.setItem("user-token", data["access-token"]);
          dispatch(fetchLogin(data));
          // const { isLoggedIn } = getState().isAuthenticated;
          // if (isLoggedIn) {
          //   return history.push("/");
          // }
        })
        .catch(error => {
          console.log(error);
          if (error === ERROR_MESSAGE.TIMEOUT)
            return dispatch(
              dispatchAndRefresh(
                fetchLoginInvalid(ERROR_MESSAGE.TIMEOUT),
                fetchRefreshRequest()
              )
            );
          if (error.status === status.INVALID_CREDENTIALS)
            return dispatch(
              dispatchAndRefresh(
                fetchLoginInvalid(SIGN_IN_INVALID),
                fetchRefreshRequest()
              )
            );
          if (error.status === status.INTERNAL_SERVER_ERROR)
            return dispatch(
              dispatchAndRefresh(
                fetchLoginInvalid(NETWORK_FAILURE),
                fetchRefreshRequest()
              )
            );
          return dispatch(
            dispatchAndRefresh(
              fetchLoginInvalid(NETWORK_FAILURE),
              fetchRefreshRequest()
            )
          );
        });
    }
  }, 2000);
};

export const userLogout = () => (dispatch, getState) => {
  dispatch(logout());
  const { isLoggedIn } = getState().isAuthenticated;
  if (!isLoggedIn) {
    clearSession();
    return history.push("/auth");
  }
};
