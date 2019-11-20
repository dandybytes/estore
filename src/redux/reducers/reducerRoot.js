import {combineReducers} from "redux";
import cart from "./reducerCart";
import menu from "./reducerMenu";
import products from "./reducerProducts";
import currency from "./reducerCurrency";

export default combineReducers({cart, menu, products, currency});
