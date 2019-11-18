import React from "react";
import {connect} from "react-redux";
import CheckoutItem from "../checkout/CheckoutItem";
import "./CheckoutPage.scss";
import {getCartValue, getCartItemCount} from "../../redux/utils/utilsCart";
import CustomButton from "../common/CustomButton";
import LinkButton from "../common/LinkButton";
import {purgeCart} from "../../redux/actions/actionsCart";

const CheckoutPage = ({cartItems, purgeCart}) => {
    return (
        <div className="checkout-page">
            {cartItems.length > 0 ? (
                <React.Fragment>
                    <div className="checkout-page-summary">
                        <h4 className="checkout-page-num-items">
                            Items in Cart: {getCartItemCount(cartItems)}
                        </h4>
                        <h4 className="checkout-page-total-value">
                            Total Value: ${getCartValue(cartItems)}
                        </h4>
                    </div>
                    <ul className="checkout-page-items">
                        {cartItems.map(cartItem => (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        ))}
                    </ul>
                    <div className="checkout-page-buttons">
                        <CustomButton
                            onClick={() => console.log("payment function to be implemented")}
                        >
                            Pay Now
                        </CustomButton>
                        <CustomButton onClick={() => purgeCart()}>Cancel All</CustomButton>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <p className="cart-empty-message">your cart is empty</p>
                    <LinkButton destination="/products" message="shop now" inverted />
                </React.Fragment>
            )}
        </div>
    );
};

const mapStateToProps = state => ({cartItems: state.cart.cartItems});

export default connect(mapStateToProps, {purgeCart})(CheckoutPage);
