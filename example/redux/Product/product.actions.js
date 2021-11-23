
import axios from '../../services/axios';
/*import Interceptor from '../../services/Interceptor'*/
import {
    SELECT_PRODUCTS_SUCCESS,
    SELECT_PRODUCTS_FAILURE,
    SELECT_PRODUCTS_STARTED,
  } from './product.types';
  
  
  
  export const selectProducts = (alias) => {
    /*const interceptor = new Interceptor()*/
    return dispatch => {
      dispatch({type:SELECT_PRODUCTS_STARTED});
      axios.post(`/${alias}/categories/products`,{
          "filterUrl": decodeURIComponent(window.location.href)
        })
        .then(res => {
          dispatch({type:SELECT_PRODUCTS_SUCCESS,payload:res.data});
        })
        .catch(err => {
          dispatch({type:SELECT_PRODUCTS_FAILURE,payload:err});
        });
    };
  };
  
