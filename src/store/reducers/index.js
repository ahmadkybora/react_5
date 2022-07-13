import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import productReducer from "./productReducer";
import homeReducer from "./homeReducer";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import dashboardReducer from "./dashboardReducer";
import brandReducer from './brandReducer';

const rootReducer = combineReducers({
    authReducer,
    dashboardReducer,
    userReducer,
    productReducer,
    categoryReducer,
    brandReducer,
    homeReducer
});

export default rootReducer;