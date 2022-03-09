import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { authReducer } from "./userReducer";
export default combineReducers({
    auth: authReducer
})