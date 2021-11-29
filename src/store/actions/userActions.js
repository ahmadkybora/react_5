import http from '../../services/httpService';
import { Success, Error } from '../../utils/exceptionHandler';
import * as actions from './type';

export const getUsers = () => {
    return async dispatch => {
      // dispatch({type:GET_USERS});
      await http.get(`panel/users`)
        .then(res => {
          dispatch({ 
            type:actions.GET_USERS, 
            payload:res.data.data 
          });
        })
        .catch(err => {
        //   dispatch({type:SELECT_PRODUCTS_FAILURE,payload:err});
        });
    };
};

export const createUsers = () => {
    return {
      type: actions.CREATE_USERS,
    };
};

export const updateUsers = (payload) => {
    return {
      type: actions.UPDATE_USERS,
      payload
    };
};