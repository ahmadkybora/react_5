import { combineReducers } from 'redux';


import counterReducer from './Counter/counter.reducer';

import productReducer from './Product/product.reducer';

import cartReducer from './Cart/cart.reducer'
import userReducer from './User/user.reducer'
const rootReducer = combineReducers({

    counter: counterReducer,

    products: productReducer,

    cart: cartReducer,
    user: userReducer

});

export default rootReducer;