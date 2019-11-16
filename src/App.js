import React from "react";
import {Route, Switch} from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import CartSidePanel from "./components/cart/CartSidePanel";
import MenuPanel from "./components/menu/MenuPanel";
import AboutPage from "./components/pages/AboutPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ProductCataloguePage from "./components/pages/ProductCataloguePage";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";

function App() {
    return (
        <div className="app">
            <Header />
            <CartSidePanel />
            <MenuPanel />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/products" exact component={ProductCataloguePage} />
                <Route path="/products/:id" component={ProductDetailsPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;
