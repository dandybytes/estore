import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {setProductQuery} from "../../redux/actions/actionsProducts";
import {searchProductList} from "../../utils/utilsProduct";
import ProductCard from "../product/ProductCard";
import LinkButton from "../common/LinkButton";
import SearchBar from "../common/SearchBar";
import Spinner from "../common/Spinner";
import GoBackIcon from "../icons/GoBackIcon";
import Title from "../common/Title";
import "./ProductCataloguePage.scss";

const ProductCataloguePage = ({allProducts, productQuery, setProductQuery}) => {
    let [productsToDisplay, setProductsToDisplay] = useState([]);

    useEffect(() => setProductsToDisplay(searchProductList(allProducts, productQuery)), [
        allProducts,
        productQuery
    ]);

    return (
        <div className="product-catalogue-page">
            <Title text="Our Products" center uppercase />
            <SearchBar
                handleUserQuery={setProductQuery}
                userQuery={productQuery}
                searchDelay={100}
            />
            {allProducts.length > 0 ? (
                <div className="product-board">
                    {productsToDisplay.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <>
                    <Spinner />
                    <LinkButton destination="/" inverted>
                        <GoBackIcon size={15} fill="white" />
                        <span>Home Page</span>
                    </LinkButton>
                </>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    const {allProducts, productQuery} = state.products;
    return {allProducts, productQuery};
};

export default connect(mapStateToProps, {setProductQuery})(ProductCataloguePage);
