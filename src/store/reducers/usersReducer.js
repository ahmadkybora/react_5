import * as actions from '../actions/type';

const initialState = {
  users:[],
  user: {},
  edit: false,
}

export default function (state = initialState, action) {
  switch(action.type) {
    case actions.GET_USERS: {
        return {
            ...state,
            users: action.payload,
        }
    }

    case actions.CREATE_USERS: {
      return {
          ...state,
          user: {},
          edit: false
      }
    }
    
    case actions.UPDATE_USERS: {
        return {
            ...state,
            user: action.payload,
            edit: true
        }
    }

    default: return state
  }
};