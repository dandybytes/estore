import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import "./CheckoutItem.scss";
import {addCartItem, removeCartItem, removeCartProduct} from "../../redux/actions/actionsCart";

const CheckoutItem = ({cartItem, addCartItem, removeCartItem, removeCartProduct, history}) => {
    const {name, imageURLs, price, quantity, id} = cartItem;
    const imgURL = imageURLs && imageURLs.length > 0 ? imageURLs[0] : null;

    return (
        <div className="checkout-item">
            <span
                className="checkout-item-remove-btn bubble"
                onClick={() => removeCartProduct(cartItem)}
                title="remove product from cart"
            >
                &#x2715;
            </span>
            <div
                className="checkout-item-image"
                onClick={() => history.push(`/products/${id}`)}
                title="see product details"
            >
                <img src={imgURL} alt={name} />
            </div>
            <span
                className="checkout-item-name"
                onClick={() => history.push(`/products/${id}`)}
                title="see product details"
            >
                {name}
            </span>
            <span className="checkout-item-price">${price}</span>
            <div className="checkout-item-quantity">
                <span
                    className="checkout-item-minus-one bubble"
                    onClick={() => removeCartItem(cartItem)}
                    title="decrease the number of items"
                >
                    -
                </span>
                <span className="checkout-item-quantity-value">x{quantity}</span>
                <span
                    className="checkout-item-plus-one bubble"
                    onClick={() => addCartItem(cartItem)}
                    title="increase the number of items"
                >
                    +
                </span>
            </div>
            <span className="checkout-item-total">${quantity * price}</span>
        </div>
    );
};

CheckoutItem.propTypes = {
    cartItem: PropTypes.object.isRequired,
    addCartItem: PropTypes.func.isRequired,
    removeCartItem: PropTypes.func.isRequired,
    removeCartProduct: PropTypes.func.isRequired
};

CheckoutItem.defaultProps = {
    // cartItem: {}
};

export default connect(null, {addCartItem, removeCartItem, removeCartProduct})(
    withRouter(CheckoutItem)
);
