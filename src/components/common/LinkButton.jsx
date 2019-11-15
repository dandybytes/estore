import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import "./LinkButton.scss";

const LinkButton = ({destination, className, message}) => {
    return (
        <Link to={destination} className={className}>
            {message}
        </Link>
    );
};

LinkButton.propTypes = {
    destination: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    className: PropTypes.string
};

LinkButton.defaultProps = {
    className: "link-button"
};

export default LinkButton;
