import React from "react";
import {Link} from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <div className="home-page">
            <section className="home-poster">
                <div className="home-poster-message">
                    <h1 className="home-poster-title">A new perspective on the world...</h1>
                    <Link to="/products" className="link-button">
                        shop now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
