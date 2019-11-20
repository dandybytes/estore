import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

// import "./Price.scss";

const Price = ({value, symbol, rate, withDecimals}) => {
    const computePrice = (value, rate, withDecimals) =>
        (value * rate).toFixed(withDecimals ? 2 : 0);

    const renderPrice = (num, withDecimals) => {
        let [integer, decimals] = String(num).split(".");
        let output = [];
        while (integer.length > 3) {
            output.unshift(integer.slice(-3));
            integer = integer.slice(0, -3);
        }
        output.unshift(integer);
        output = output.join(",");
        return withDecimals ? output.concat(`.${decimals}`) : output;
    };

    const price = renderPrice(computePrice(value, rate, withDecimals), withDecimals);

    return (
        <span className="price">
            {symbol}
            {price}
        </span>
    );
};

Price.propTypes = {
    value: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    withDecimals: PropTypes.bool
};

Price.defaultProps = {
    withDecimals: false
};

const mapStateToProps = state => {
    const {selectedCurrency, currencyOptions} = state.currency;
    const {symbol, rate} = currencyOptions[selectedCurrency];
    return {symbol, rate};
};

export default connect(mapStateToProps)(Price);
