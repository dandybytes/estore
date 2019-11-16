import React from "react";
import {connect} from "react-redux";
import {toggleMenu} from "../../../redux/actions/actionsMenu";
import "./NavBtn.scss";

const NavBtn = ({toggleMenu}) => {
    return (
        <div className="nav-btn" onClick={toggleMenu}>
            <span className="nav-icon">&nbsp;</span>
        </div>
    );
};

export default connect(null, {toggleMenu})(NavBtn);
