const initialState = {allProducts: {}, filteredProducts: {}};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "set_all_products":
            return {...state, allProducts: action.payload};
        case "set_filtered_products":
            return {...state, filteredProducts: action.payload};
        default:
            return state;
    }
};

export default productReducer;
