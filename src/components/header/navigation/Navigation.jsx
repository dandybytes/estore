import React from "react";
import "./Navigation.scss";

import NavBtn from "./NavBtn";
import NavList from "./NavList";

const Navigation = () => {
    return (
        <nav>
            <NavBtn />
            <NavList />
        </nav>
    );
};

export default Navigation;
