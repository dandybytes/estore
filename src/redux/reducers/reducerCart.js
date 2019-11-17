const initialState = {visible: false, cartItems: []};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggle_cart":
            return {...state, visible: !state.visible};
        case "close_cart":
            return {...state, visible: false};
        case "open_cart":
            return {...state, visible: true};
        case "add_item_to_cart":
            const newCartItems = [...state.cartItems, action.payload];
            return {...state, cartItems: newCartItems};
        default:
            return state;
    }
};

export default cartReducer;
