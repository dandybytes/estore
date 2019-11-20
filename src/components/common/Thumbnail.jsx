import React from "react";
import PropTypes from "prop-types";
import SquareImageContainer from "./SquareImageContainer";
import MagnifyingGlassIcon from "../icons/MagnifyingGlassIcon";
import "./Thumbnail.scss";

const Thumbnail = ({imgURL, proportion, handleClick, overlayColor, backgroundColor}) => {
    return (
        <SquareImageContainer
            imgURL={imgURL}
            proportion={proportion}
            overlayColor={overlayColor}
            backgroundColor={backgroundColor}
            handleClick={handleClick}
        >
            <div className="image-container-icon">
                <MagnifyingGlassIcon />
            </div>
        </SquareImageContainer>
    );
};

Thumbnail.propTypes = {
    imgURL: PropTypes.string.isRequired,
    proportion: PropTypes.number, // proportion of container the image will cover: integer value (e.g. 90 for 90%)
    overlayColor: PropTypes.string, // covers the image
    backgroundColor: PropTypes.string, // behind image
    handleClick: PropTypes.func
};

Thumbnail.defaultProps = {
    proportion: 80
};

export default Thumbnail;
