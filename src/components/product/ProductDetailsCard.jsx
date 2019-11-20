import React, {useState} from "react";
import PropTypes from "prop-types";
import AddToCartIcon from "../icons/AddToCartIcon";
import GoBackIcon from "../icons/GoBackIcon";
import "./ProductDetailsCard.scss";
import CustomButton from "../common/CustomButton";

const ProductDetailsCard = ({productDetails, addProductToCart, goToProductsPage}) => {
    let [spotlightImageIndex, setSpotlightImageIndex] = useState(0);

    const {name, manufacturer, model, imageURLs, description, price} = productDetails;

    return (
        <article className="product-details-card">
            <div className="product-details-manufacturer">
                <span>manufacturer: </span> <span>{manufacturer}</span>
            </div>
            <div className="product-details-model">
                <span>model: </span> <span>{model}</span>
            </div>
            <div className="product-details-poster">
                <img src={imageURLs[spotlightImageIndex]} alt={`${name} poster`} />
            </div>
            <ul className="product-details-thumbnails">
                {imageURLs.map((url, ind) => (
                    <img
                        onClick={() => setSpotlightImageIndex(ind)}
                        src={url}
                        alt={`${name} thumbnail ${ind + 1}`}
                        key={`${name}thumbnail${ind}`}
                    />
                ))}
            </ul>
            <div className="product-details-description">{description}</div>
            <div className="product-details-price">
                <span>price: </span>
                <span>${price}</span>
            </div>
            <div className="product-details-buttons">
                <CustomButton onClick={addProductToCart}>
                    <AddToCartIcon size={15} fill="white" />
                    <span>Add</span>
                </CustomButton>
                <CustomButton onClick={goToProductsPage}>
                    <GoBackIcon size={15} fill="white" />
                    <span>Back</span>
                </CustomButton>
            </div>
        </article>
    );
};

ProductDetailsCard.propTypes = {
    productDetails: PropTypes.object.isRequired,
    addProductToCart: PropTypes.func.isRequired
};

ProductDetailsCard.defaultProps = {
    // productDetails: {manufacturer: "SomeCompany", model: "some product"}
};

export default ProductDetailsCard;
