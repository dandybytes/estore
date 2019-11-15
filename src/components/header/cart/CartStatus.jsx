import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {toggleCartVisible} from "../../../redux/actions/actionsCart";

import "./CartStatus.scss";

import CartIcon from "../../icons/CartIcon";

const CartStatus = ({cartItemCount, toggleCartVisible}) => {
    return (
        <div className="cart-status" onClick={toggleCartVisible}>
            <CartIcon size={20} fill="white" />
            <span className="cart-items">{cartItemCount} items</span>
        </div>
    );
};

CartStatus.propTypes = {
    cartItemCount: PropTypes.number
};

CartStatus.defaultProps = {
    cartItemCount: 0
};

export default connect(null, {toggleCartVisible})(CartStatus);
