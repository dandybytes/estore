import {combineReducers} from "redux";
import cart from "./reducerCart";
import menu from "./reducerMenu";

export default combineReducers({cart, menu});
