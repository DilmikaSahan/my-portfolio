
import React from "react";
import "./Home.css"; // Optional: for custom styles

import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";


function Home() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;