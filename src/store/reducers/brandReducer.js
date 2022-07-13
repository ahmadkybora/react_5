import * as actions from '../actions/type';

const initialState = {
  brands: [],
  brand: [],
  edit: false,
  loading:false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case actions.GET_BRANDS: {
        return {
            ...state,
            brands: action.payload,
            loading: true
        }
    }

    case actions.CREATE_BRANDS: {
      return {
        ...state,
        brand: {},
        edit: false
      }
    }

    case actions.EDIT_BRNADS: {
        return {
          ...state,
          brand: action.payload,
          edit: true,
          loading: true
        }
    }

    default: return state
  }
};