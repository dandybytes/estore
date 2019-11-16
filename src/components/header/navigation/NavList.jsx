import React from "react";
import {NavLink} from "react-router-dom";
import "./NavList.scss";

const NavList = () => {
    return (
        <ul className="nav-list">
            <li>
                <NavLink to="/" exact className="nav-link" activeClassName="nav-link-active">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/products"
                    exact
                    className="nav-link"
                    activeClassName="nav-link-active"
                >
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" exact className="nav-link" activeClassName="nav-link-active">
                    Contact
                </NavLink>
            </li>
            {/* <li>
                <NavLink to="/about" exact className="nav-link" activeClassName="nav-link-active">
                    About
                </NavLink>
            </li> */}
        </ul>
    );
};

export default NavList;
