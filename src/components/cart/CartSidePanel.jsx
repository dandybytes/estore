import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {closeCart} from "../../redux/actions/actionsCart";
import CartItem from "./CartItem";
import LinkButton from "../common/LinkButton";
import "./CartSidePanel.scss";

const CartSidePanel = ({cartItems, cartVisible, closeCart}) => {
    return (
        <div className={`cart-side-panel${cartVisible ? " open" : ""}`}>
            <span className="close-cart-cross-btn" onClick={closeCart}>
                &#x2715;
            </span>
            {cartItems.length ? (
                <>
                    <ul className="cart-items">
                        {cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))}
                    </ul>
                    <h4 className="cart-total">
                        cart total : $
                        {cartItems.reduce(
                            (total, cartItem) => total + cartItem.quantity * cartItem.price,
                            0
                        )}
                    </h4>
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
