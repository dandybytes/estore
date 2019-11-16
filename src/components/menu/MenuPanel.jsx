import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {closeMenu} from "../../redux/actions/actionsMenu";
import "./MenuPanel.scss";

const MenuPanel = ({menuVisible, closeMenu}) => {
    return (
        <div className={`menu-panel${menuVisible ? " open" : ""}`}>
            <span className="close-menu-cross-btn" onClick={closeMenu}>
                &#x2715;
            </span>
            <ul className="menu-pages">
                <li>
                    <Link to="/" className="menu-panel-link" onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/products" className="menu-panel-link" onClick={closeMenu}>
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="menu-panel-link" onClick={closeMenu}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="menu-panel-link" onClick={closeMenu}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/checkout" className="menu-panel-link" onClick={closeMenu}>
                        Checkout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

MenuPanel.propTypes = {
    menuVisible: PropTypes.bool.isRequired,
    closeMenu: PropTypes.func.isRequired
};

MenuPanel.defaultProps = {
    menuVisible: false,
    closeMenu: () => console.log("closing cart")
};

export default connect(state => ({menuVisible: state.menu.visible}), {closeMenu})(MenuPanel);
