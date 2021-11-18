import {
    SELECT_PRODUCTS_SUCCESS,
    SELECT_PRODUCTS_FAILURE,
    SELECT_PRODUCTS_STARTED,
  } from './product.types';
 
import ProductService from '../../services/ProductService';

    
    const INITIAL_STATE = {

        products: [],
        loading: true,
        error: null
    };

    const productReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
            case SELECT_PRODUCTS_STARTED:
      return {
        ...state,
        loading:true,
        error: null
      };
    case SELECT_PRODUCTS_SUCCESS:

      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      };
    case SELECT_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;

    }
    
    };

    export default productReducer;