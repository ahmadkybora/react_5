import * as actions from '../actions/type';

const initialState = {
  categories:[],
  loading:true
}

export default function (state = initialState, action) {
  switch(action.type) {
    case actions.GET_CATEGORIES: {
        return {
            ...state,
            categories: action.payload,
            loading: false
        }
    }

    default: return state
  }
};