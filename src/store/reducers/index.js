import { combineReducers } from "redux";
import userReducer from "./usersReducer";

const rootReducer = combineReducers({
    userReducer,
});

export default rootReducer;
// https://medium.com/how-to-react/how-to-use-redux-with-react-hooks-and-axios-a78d942fbe9c