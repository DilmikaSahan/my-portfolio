
import React from "react";
import "./Home.css"; // Optional: for custom styles

import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";


function Home() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <section className="home-section">
                <div className="container text-center">
                    {/* Home page content goes here */}
                </div>
            </section>
        </>
    );
}

export default Home;