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
            {cartItemCount > 0 && <span className="cart-items">{cartItemCount}</span>}
        </div>
    );
};

CartStatus.propTypes = {
    cartItemCount: PropTypes.number.isRequired
};

CartStatus.defaultProps = {
    // cartItemCount: 0
};

const mapStateToProps = state => ({
    cartItemCount: state.cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
});

export default connect(mapStateToProps, {toggleCartVisible})(CartStatus);
