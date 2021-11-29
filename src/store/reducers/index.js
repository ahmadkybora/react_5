import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import productReducer from "./productReducer";
import homeReducer from "./homeReducer";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import dashboardReducer from "./dashboardReducer";

const rootReducer = combineReducers({
    authReducer,
    dashboardReducer,
    userReducer,
    productReducer,
    categoryReducer,
    homeReducer
});

export default rootReducer;