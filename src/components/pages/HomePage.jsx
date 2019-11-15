import React from "react";

import "./HomePage.scss";

import LinkButton from "./../common/LinkButton";

const HomePage = () => {
    return (
        <div className="home-page">
            <section className="home-poster">
                <div className="home-poster-message">
                    <h1 className="home-poster-title">A new perspective on the world...</h1>
                    <LinkButton destination="/products" message="shop now" />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
