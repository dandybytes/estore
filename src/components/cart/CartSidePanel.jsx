import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {closeCart} from "../../redux/actions/actionsCart";
import CartItem from "./CartItem";
import LinkButton from "../common/LinkButton";
import "./CartSidePanel.scss";
import {getCartValue, getCartItemCount} from "../../redux/utils/utilsCart";

const CartSidePanel = ({cartItems, cartVisible, closeCart}) => {
    return (
        <div className={`cart-side-panel${cartVisible ? " open" : ""}`}>
            <span className="close-cart-cross-btn" onClick={closeCart}>
                &#x2715;
            </span>
            {cartItems.length ? (
                <>
                    <div className="cart-summary">
                        <h4 className="cart-count">Items: {getCartItemCount(cartItems)}</h4>
                        <h4 className="cart-total">Value: ${getCartValue(cartItems)}</h4>
                    </div>
                    <ul className="cart-items">
                        {cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))}
                    </ul>
                    <LinkButton
                        destination="/checkout"
                        message="proceed to checkout"
                        onClick={closeCart}
                    />
                </>
            ) : (
                <p className="cart-empty-message">your cart is empty</p>
            )}
        </div>
    );
};

CartSidePanel.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    cartVisible: PropTypes.bool.isRequired,
    closeCart: PropTypes.func.isRequired
};

CartSidePanel.defaultProps = {
    cartItems: [],
    cartVisible: false,
    closeCart: () => console.log("closing cart")
};

export default connect(
    state => ({
        cartVisible: state.cart.visible,
        cartItems: state.cart.cartItems
    }),
    {closeCart}
)(CartSidePanel);
