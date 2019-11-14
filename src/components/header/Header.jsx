import React from "react";
import "./Header.scss";

import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";
import UserLogin from "./login/UserLogin";
import CartStatus from "./cart/CartStatus";

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <Navigation />
                <Logo />
                <div className="header-rightside">
                    <UserLogin />
                    <CartStatus />
                </div>
            </div>
            <div className="header-bottom-border"></div>
        </header>
    );
};

export default Header;
