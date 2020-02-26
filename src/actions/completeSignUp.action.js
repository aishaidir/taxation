import { ACTIONS } from '../Constants/ACTIONS';

const {
  SIGN_UP_COMPLETION_REQUEST,
  SIGN_UP_COMPLETION,
  REFRESH_SIGN_UP_COMPLETION,
  SIGN_UP_COMPLETION_ERROR,
} = ACTIONS;
export const fetchCompleteSignUpRequest = () => ({
  type: SIGN_UP_COMPLETION_REQUEST,
});

export const fetchCompleteSignUp = () => ({
  type: SIGN_UP_COMPLETION,
});

export const fetchCompleteSignUpError = (payload) => ({
  type: SIGN_UP_COMPLETION_ERROR,
  payload,
});
export const fetchRefreshRequest = () => ({
  type: REFRESH_SIGN_UP_COMPLETION,
});
