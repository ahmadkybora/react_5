import * as actions from "../actions/type";

const initialState = {
    user: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case actions.LOGIN: {
            return {
                ...state,
                user: action.payload,
            }
        }

        case actions.REGISTER: {
            return {
                ...state,
                user: action.payload,
            }
        }

        case actions.LOGOUT: {
            return {
                ...state,
                user: action.payload,
            }
        }
        default: return state;
    }
}