import * as actions from "../actions/type";

const initialState = {
    products: [],
    product:{},
    categories: [],
    brands: []
}

export default function(state = initialState, action) {
    switch(action.type) {

        case actions.GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
            }
        }

        case actions.SHOW_PRODUCT: {
            return {
                ...state,
                product: state.products.data.filter(p => p.id === action.payload.id),
            }
        }

        case actions.GET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload,
            }
        }

        case actions.GET_BRANDS: {
            return {
                ...state,
                brands: action.payload
            }
        }
        
        default: return state;
    }
}