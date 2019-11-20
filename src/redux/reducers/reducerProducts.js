const initialState = {allProducts: {}, filteredProducts: {}, productQuery: ""};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "set_all_products":
            return {...state, allProducts: action.payload};
        case "set_filtered_products":
            return {...state, filteredProducts: action.payload};
        case "set_product_query":
            return {...state, productQuery: action.payload};
        default:
            return state;
    }
};

export default productReducer;
