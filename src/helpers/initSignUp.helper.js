import {
  fetchOtpError,
  fetchOtpRequest,
  getOtpData,
  fetchSignUpError,
  fetchSignUpReguest,
  getSignUpData,
  fetchRefreshRequest
} from '../actions/initSignUp.action';
import { InitialSignUp, fetchSignUpOTPValidation } from '../API/authentication';
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants';
import { timeout } from './authentication.helper';
import { history } from '../App';

export const dispatchAndRefresh = (errorAction, refreshAction) => dispatch => {
  dispatch(errorAction);
  return setTimeout(() => dispatch(refreshAction), 4000);
};

const { status } = API;
const {
  NETWORK_FAILURE,
  SERVER_ERROR,
  SIGN_UP_ERROR,
  TIMEOUT,
  OTP_ERROR
} = ERROR_MESSAGE;
export const initUserSignUp = credentials => (dispatch, getState) => {
  dispatch(fetchSignUpReguest());
  setTimeout(() => {
    // return dispatch(getSignUpData(credentials))
    if (credentials) {
      return timeout(4000, InitialSignUp(credentials))
        .then(resData => {
          console.log(resData);
          return dispatch(getSignUpData(credentials));
        })
        .catch(err => {
          console.log(err);
          console.log(err.status);
          if (err === ERROR_MESSAGE.TIMEOUT)
            return dispatch(
              dispatchAndRefresh(
                fetchSignUpError(TIMEOUT),
                fetchRefreshRequest()
              )
            );
          if (err.status === status.NOT_ACCEPTABLE)
            return dispatch(
              dispatchAndRefresh(
                fetchSignUpError(SIGN_UP_ERROR.INCOMPLETE),
                fetchRefreshRequest()
              )
            );
          if (err.status === status.INTERNAL_SERVER_ERROR)
            return dispatch(
              dispatchAndRefresh(
                fetchSignUpError(SERVER_ERROR),
                fetchRefreshRequest()
              )
            );
          return dispatch(
            dispatchAndRefresh(
              fetchSignUpError(NETWORK_FAILURE),
              fetchRefreshRequest()
            )
          );
        });
    }
  }, 2000);
};

export const signUpOtpValidation = otp => (dispatch, getState) => {
  dispatch(fetchOtpRequest());
  setTimeout(() => {
    if (otp) {
      return timeout(3500, fetchSignUpOTPValidation(otp))
        .then(otpData => {
          console.log(otpData);
          dispatch(getOtpData(otpData.otp));
          const { signUpOtpSuccess } = getState().initSignup;
          if (signUpOtpSuccess === true) {
            console.log(signUpOtpSuccess);
            return history.push({
              pathname: '/auth/signup',
              state: { pathRoute: signUpOtpSuccess }
            });
          }
        })
        .catch(error => {
          console.log(error);
          if (error === ERROR_MESSAGE.TIMEOUT)
            return dispatch(
              dispatchAndRefresh(fetchOtpError(TIMEOUT), fetchRefreshRequest())
            );
          if (error.status === status.NOT_FOUND)
            return dispatch(
              dispatchAndRefresh(
                fetchOtpError(OTP_ERROR.INCORRECT),
                fetchRefreshRequest()
              )
            );
          if (error.status === status.NOT_ACCEPTABLE)
            return dispatch(
              dispatchAndRefresh(
                fetchOtpError(OTP_ERROR.TIMEOUT),
                fetchRefreshRequest()
              )
            );
          if (error.status === status.INTERNAL_SERVER_ERROR)
            return dispatch(
              dispatchAndRefresh(
                fetchOtpError(SERVER_ERROR),
                fetchRefreshRequest()
              )
            );
          return dispatch(
            dispatchAndRefresh(
              fetchOtpError(NETWORK_FAILURE),
              fetchRefreshRequest()
            )
          );
        });
    }
  }, 2000);
};
