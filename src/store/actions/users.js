import http from '../../services/httpService';
import { Success, Error } from '../../utils/exceptionHandler';
import { GET_USERS } from './type';

export const getUsers = () => {
    return async dispatch => {
      // dispatch({type:GET_USERS});
      await http.get(`panel/users`)
        .then(res => {
          dispatch({ 
            type:GET_USERS, 
            payload:res.data.data 
          });
        })
        .catch(err => {
        //   dispatch({type:SELECT_PRODUCTS_FAILURE,payload:err});
        });
    };
};