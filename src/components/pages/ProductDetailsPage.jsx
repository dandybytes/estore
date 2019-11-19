import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {addCartItem} from "../../redux/actions/actionsCart";
import {getProductInfo} from "../../redux/utils/utilsProduct";
import ProductDetailsCard from "../product/ProductDetailsCard";
import "./ProductDetailsPage.scss";

const ProductDetailsPage = ({productList, addCartItem, match, history}) => {
    let [productDetails, setProductDetails] = useState(null);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setProductDetails(getProductInfo(productList, match.params.id));
        return () => setProductDetails(null);
    }, [productList, match.params.id]);

    useEffect(() => {
        if (productDetails !== null) setIsLoading(false);
    }, [productDetails]);

    return (
        <section className="product-details-page">
            {isLoading ? (
                <p>product details loading</p>
            ) : (
                <ProductDetailsCard
                    productDetails={productDetails}
                    addProductToCart={() => addCartItem(productDetails)}
                    goToProductsPage={() => history.push("/products")}
                />
            )}
        </section>
    );
};

const mapStateToProps = state => ({productList: state.products.allProducts});

export default connect(mapStateToProps, {addCartItem})(withRouter(ProductDetailsPage));
