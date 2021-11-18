import {REMOVE,UPDATE_FAILURE, UPDATE_STARTED, UPDATE_SUCCESS} from './user.types';

import Interceptor from "../../services/Interceptor";


export const removeUser = (parameters) => {

    return {

       type: REMOVE

    };

};
export const updateUser = (token) => {
    /*const interceptor = new Interceptor()*/
    return dispatch => {
        dispatch({type:UPDATE_STARTED});
        Interceptor
            .get(`/user/me`)
            .then(res => {
                dispatch({type:UPDATE_SUCCESS,payload:res.data.email});
            })
            .catch(err => {
                dispatch({type:UPDATE_FAILURE,payload:err});
            });
    };
};