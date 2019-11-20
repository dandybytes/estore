import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {addCartItem} from "../../redux/actions/actionsCart";
import PropTypes from "prop-types";
import AddToCartIcon from "../icons/AddToCartIcon";
import MagnifyingGlassIcon from "../icons/MagnifyingGlassIcon";
import Price from "../common/Price";
import "./ProductCard.scss";

const ProductCard = ({product, match, history, addCartItem}) => {
    const {price, id} = product;
    const imgURL = product.imageURLs ? product.imageURLs[0] : null;
    const title = `${product.manufacturer} ${product.model}`;

    return (
        <div className="card">
            <div className="card-image-container">
                <img src={imgURL} alt={title} className="card-image" />
            </div>
            <div className="card-color-overlay" />
            <div className="card-overlay">
                <h2 className="card-overlay-title">{title}</h2>
                <h3 className="card-overlay-price">
                    <Price value={price} />
                </h3>
            </div>
            <div className="card-link-details" onClick={() => history.push(`${match.url}/${id}`)}>
                <MagnifyingGlassIcon size={25} />
            </div>
            <div className="card-link-add" onClick={() => addCartItem(product)}>
                <AddToCartIcon size={20} />
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

ProductCard.defaultProps = {
    product: {manufacturer: "SomeCompany", model: "some product"}
};

export default connect(null, {addCartItem})(withRouter(ProductCard));
