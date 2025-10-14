import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
    return (
        <main className="hero-container">
            <h1 className="hero-header">You got the travel plans, we got the travel vans.</h1>
            <p className="hero-description">
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect
                road trip.
            </p>
            <div className="hero-btn">
                <Link>Find your van</Link>
            </div>
        </main>
    );
}
