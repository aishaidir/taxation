import {API} from '../Constants/costants'
import { fetchAndHandleTokenRefresh, getAccessTokenHeader, getNoTokenErrorObject } from './common';

export const getAuthUserData=(associateId)=>{
    const accessTokenHeader = getAccessTokenHeader();
  if (!accessTokenHeader) { return Promise.reject(getNoTokenErrorObject()); }
    let path =`${API.URL + API.PATHS.PROFILE}`; 
    if(associateId){
     path = `${API.URL + API.PATHS.PROFILE}${associateId}`;
    }
    const method = 'GET';
    const headers =accessTokenHeader;
    return fetchAndHandleTokenRefresh(path,method,null,headers);
}
