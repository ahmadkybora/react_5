import * as actions from '../actions/type';

const initialState = {
  panels:[],
  loading:true
}

export default function (state = initialState, action) {
  switch(action.type) {
    case actions.GET_PANEL: {
        return {
            ...state,
            panels: action.payload,
            loading: false
        }
    }

    default: return state
  }
};