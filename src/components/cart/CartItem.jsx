import React from "react";
import PropTypes from "prop-types";
import "./CartItem.scss";

const CartItem = ({item: {model, manufacturer, imageURLs, price, quantity}}) => {
    return (
        <li className="cart-item">
            <div className="cart-item-image-container">
                <img src={imageURLs[0]} alt="item" />
            </div>
            <div className="item-details">
                <span className="name">{`${manufacturer} ${model}`}</span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </li>
    );
};

CartItem.propTypes = {
    item: PropTypes.object.isRequired
};

CartItem.defaultProps = {
    item: {manufacturer: "company", model: "product", imageUrl: "", price: 0, quantity: 0}
};

export default CartItem;
