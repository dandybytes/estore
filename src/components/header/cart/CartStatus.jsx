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
            {cartItemCount > 0 && (
                <span className="cart-items">
                    {cartItemCount} {cartItemCount === 1 ? "item" : "items"}
                </span>
            )}
        </div>
    );
};

CartStatus.propTypes = {
    cartItemCount: PropTypes.number.isRequired
};

CartStatus.defaultProps = {
    // cartItemCount: 0
};

const mapStateToProps = state => ({cartItemCount: state.cart.cartItems.length});

export default connect(mapStateToProps, {toggleCartVisible})(CartStatus);
