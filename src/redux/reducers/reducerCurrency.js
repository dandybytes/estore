const initialState = {
    selectedCurrency: "usd",
    currencyOptions: {
        usd: {name: "usd", symbol: "$", rate: 1},
        eur: {name: "eur", symbol: "€", rate: 0.9},
        gbp: {name: "gbp", symbol: "£", rate: 0.8}
    }
};

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "set_currency":
            return {...state, selectedCurrency: action.payload};
        default:
            return state;
    }
};

export default currencyReducer;
