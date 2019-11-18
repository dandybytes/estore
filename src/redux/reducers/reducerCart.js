import {addUnitToCart, removeUnitFromCart, removeProductFromCart} from "../utils/utilsCart";

const initialState = {visible: false, cartItems: []};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggle_cart":
            return {...state, visible: !state.visible};
        case "close_cart":
            return {...state, visible: false};
        case "open_cart":
            return {...state, visible: true};
        case "add_cart_item":
            return {...state, cartItems: addUnitToCart(state.cartItems, action.payload)};
        case "remove_cart_item":
            return {...state, cartItems: removeUnitFromCart(state.cartItems, action.payload)};
        case "remove_cart_product":
            return {...state, cartItems: removeProductFromCart(state.cartItems, action.payload)};
        case "purge_cart":
            return {...state, cartItems: []};
        default:
            return state;
    }
};

export default cartReducer;
