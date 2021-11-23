import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import homeReducer from "./homeReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    authReducer,
    userReducer,
    homeReducer
});

export default rootReducer;