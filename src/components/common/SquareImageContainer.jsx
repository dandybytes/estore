import React from "react";
import PropTypes from "prop-types";
import "./SquareImageContainer.scss";

const SquareImageContainer = ({
    imgURL,
    proportion,
    overlayColor,
    backgroundColor,
    handleClick,
    children
}) => {
    return (
        <div className="image-container" onClick={handleClick}>
            <div className="image-container-overlay" style={{backgroundColor: overlayColor}} />
            <div className="image-container-background" style={{backgroundColor}} />
            <div
                className="image-container-image"
                style={{backgroundImage: `url(${imgURL})`, width: `${proportion}%`}}
            ></div>
            {children}
        </div>
    );
};

SquareImageContainer.propTypes = {
    imgURL: PropTypes.string.isRequired,
    proportion: PropTypes.number, // proportion of container the image will cover: integer value (e.g. 90 for 90%)
    overlayColor: PropTypes.string, // covers the image
    backgroundColor: PropTypes.string, // behind image
    handleClick: PropTypes.func
};

SquareImageContainer.defaultProps = {
    proportion: 100
};

export default SquareImageContainer;
