import {combineReducers} from "redux";
import cart from "./reducerCart";
import menu from "./reducerMenu";
import products from "./reducerProducts";

export default combineReducers({cart, menu, products});
