import { ADD, REMOVE , UPDATE } from './cart.types';


export const addToCart = (parameters) => {
  
    return {

        type: ADD,
        payload: parameters

    };

};

export const removeItem = (parameters) => {

    return {

       type: REMOVE,
       payload: parameters

    };

};
export const updateCart = (parameters) => {

    return {

       type: UPDATE,
       payload: parameters

    };

};