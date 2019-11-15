const initialState = {visible: false, cartItems: []};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggle_cart_visible":
            return {...state, visible: !state.visible};
        default:
            return state;
    }
};

export default cartReducer;
