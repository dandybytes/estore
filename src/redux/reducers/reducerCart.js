const initialState = {visible: false, cartItems: []};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggle_cart_visible":
            return {...state, visible: !state.visible};
        case "close_cart":
            return {...state, visible: false};
        default:
            return state;
    }
};

export default cartReducer;
