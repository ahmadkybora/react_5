import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import productReducer from "./productReducer";
import homeReducer from "./homeReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    authReducer,
    userReducer,
    productReducer,
    homeReducer
});

export default rootReducer;