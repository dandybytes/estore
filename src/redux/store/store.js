import {createStore, compose, applyMiddleware} from "redux";
import logger from "redux-logger";

import rootReducer from "../reducers/reducerRoot";

const middleware = [];

// use the Redux logger middleware only in development mode
if (process.env.NODE_ENV === "development") middleware.push(logger);

// ensures Redux state persistance using localStorage
const saveToLocalStorage = state => {
    try {
        localStorage.setItem("eStore", JSON.stringify(state));
    } catch (error) {
        console.error("saving to local storage failed: ", error);
    }
};

// loads Redux state from localStorage if available
const loadFromLocalStorage = () => {
    try {
        const savedState = localStorage.getItem("eStore");
        if (savedState === null) return undefined;
        return JSON.parse(savedState);
    } catch (error) {
        console.error("failed to retrieve state from local storage: ", error);
        return undefined;
    }
};

const storeFromLocalStorage = loadFromLocalStorage();

// compose middleware with Redux Dev Tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeFromLocalStorage,
    composeEnhancer(applyMiddleware(...middleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
