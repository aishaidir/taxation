import { ACTIONS } from '../Constants/ACTIONS';

const {
  SIGN_UP_OTP_VALIDATION,
  SIGN_UP_OTP_VALIDATION_REQUEST,
  SIGN_UP_OTP_VALIDATION_ERROR,
  INITIATE_SIGN_UP,
  INITIATE_SIGN_UP_REQUEST,
  INITIAL_SIGN_UP_ERROR,
  REFRESH_SIGNUP_REQUEST,
} = ACTIONS;
export const fetchSignUpReguest = () => ({
  type: INITIATE_SIGN_UP_REQUEST,
});

export const getSignUpData = (payload) => ({
  type: INITIATE_SIGN_UP,
  payload,
});

export const fetchSignUpError = (payload) => ({
  type: INITIAL_SIGN_UP_ERROR,
  payload,
});
export const fetchOtpRequest = () => ({
  type: SIGN_UP_OTP_VALIDATION_REQUEST,

});

export const getOtpData = (payload) => ({
  type: SIGN_UP_OTP_VALIDATION,
  payload,
});

export const fetchOtpError = (payload) => ({
  type: SIGN_UP_OTP_VALIDATION_ERROR,
  payload,
});

export const fetchRefreshRequest = () => ({
  type: REFRESH_SIGNUP_REQUEST,
});
