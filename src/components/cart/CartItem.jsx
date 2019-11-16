import React from "react";
import PropTypes from "prop-types";
import "./CartItem.scss";

const CartItem = ({item: {name, imageUrl, price, quantity}}) => {
    return (
        <li className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
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
    item: {name: "item", imageUrl: "", price: 0, quantity: 0}
};

export default CartItem;
