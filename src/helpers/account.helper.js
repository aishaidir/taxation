import { getUserDataRequest, getuserData, fetchUserDataError } from "../actions/authentication.action";
import { timeout } from "./authentication.helper";
import { getAuthUserData } from "../API/account";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'

const {status}= API
export const fetchUserData = (associateID)=>{
    return (dispatch, getState)=>{
      dispatch(getUserDataRequest());
     return timeout(50000, getAuthUserData(associateID)).then(data=>{
         return dispatch(getuserData(data))
     }).catch(error=>{
         console.log(error)
         if (error === ERROR_MESSAGE.TIMEOUT) return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.TIMEOUT)));
         if (error.status === status.UNAUTHORIZED)  return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.UNAUTHORIZED)));
         if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.SERVER_ERROR)));
         if (error.status === status.TOKEN_EXPIRED)  return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.EXPIRED_TOKEN)));
         return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.NETWORK_FAILURE)));
     })
     }
  }
  
