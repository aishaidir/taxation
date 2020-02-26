import { ACTIONS } from '../Constants/ACTIONS';

const {
  LOGIN_REQUEST,
  LOGIN,
  LOGIN_ERROR,
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  GET_USER_DATA_REQUEST,
  LOGIN_INVALID,
  LOGOUT,
  REFRESH_LOGIN_REQUEST,
} = ACTIONS;
export const fetchLoginrequest = () => ({
  type: LOGIN_REQUEST,
});

export const fetchLoginInvalid = (payload) => ({
  type: LOGIN_INVALID,
  payload,
});
export const fetchLoginError = () => ({
  type: LOGIN_ERROR,
});

export const fetchRefreshRequest = () => ({
  type: REFRESH_LOGIN_REQUEST,
});
export const fetchLogin = (payload) => ({
  type: LOGIN,
  payload,
});
export const getUserDataRequest = () => ({
  type: GET_USER_DATA_REQUEST,
});
export const fetchUserDataError = (payload) => ({
  type: GET_USER_DATA_ERROR,
  payload,
});
export const getuserData = (payload) => {
  const { tokens, ...others } = payload;
  return {
    type: GET_USER_DATA,
    token: { ...tokens },
    data: others,
  };
};

export const logout = () => ({
  type: LOGOUT,
});
