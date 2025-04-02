import React from "react";
import Hero from "../layout/Hero";
import { StyledHomeContainer } from "../../styles/Home.styles";

function Home() {
    return (
        <>
            <Hero 
                backgroundImage="/assets/home-hero-bg.png"
                title="Inspired by nature, driven by technology, perfected in partnership. Welcome to Pears."
                buttonText="Learn About Us"
                buttonLink="/about"
                fullHeight={true}
            />
            
            <StyledHomeContainer>
                {/* Rest of the content will be added later */}
            </StyledHomeContainer>
        </>
    );
}

export default Home;