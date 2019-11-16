const initialState = {visible: false};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggle_menu":
            return {...state, visible: !state.visible};
        case "close_menu":
            return {...state, visible: false};
        case "open_menu":
            return {...state, visible: false};
        default:
            return state;
    }
};

export default menuReducer;
