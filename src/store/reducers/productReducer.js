import * as actions from '../actions/type';

const initialState = {
  products:[],
  loading:true
}

export default function (state = initialState, action) {
  switch(action.type) {
    case actions.GET_PRODUCTS: {
        return {
            ...state,
            products: action.payload,
            loading: false
        }
    }

    default: return state
  }
};