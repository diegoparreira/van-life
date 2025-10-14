import React from "react";
import imgSrc from "../../assets/about-image.png";
import { Link } from "react-router-dom";
import "./AboutContent.css";

export default function AboutContent() {
    return (
        <main className="about-container">
            <div className="about-image-container">
                <img src={imgSrc} alt="" className="about-image" />
            </div>
            <div className="about-content-container">
                <h1 className="about-header">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="about-description">
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are
                    recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs
                    extra 😉) <br /> <br /> Our team is full of vanlife enthusiasts who know firsthand the magic of
                    touring the world on 4 wheels.
                </p>
                <div className="about-banner">
                    <h2 className="about-banner-header">Your destination is waiting. Your van is ready.</h2>
                    <div className="about-btn">
                        <Link>Explore our vans</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
