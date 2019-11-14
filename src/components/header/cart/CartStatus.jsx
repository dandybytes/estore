import React from "react";
import PropTypes from "prop-types";
import "./CartStatus.scss";

import CartIcon from "../../icons/CartIcon";

const CartStatus = ({cartItems}) => {
    return (
        <div className="cart-status">
            <CartIcon size={20} fill="white" />
            <span className="cart-items">{cartItems} items</span>
        </div>
    );
};

CartStatus.propTypes = {
    cartItems: PropTypes.number
};

CartStatus.defaultProps = {
    cartItems: 0
};

export default CartStatus;
