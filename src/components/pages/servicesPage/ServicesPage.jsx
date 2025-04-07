import React from "react";
import Hero from "../../layout/Hero";
import Services from "./Services"; 

const ServicesPage = () => {
    return (
        <>
            <Hero
                backgroundImage="/assets/service-hero-bg.png"
                title="OUR SERVICES"
                subtitle="WE OFFER OUR EXPERTISE TO HELP YOUR BUSINESS THRIVE IN THE DIGITAL AGE. FROM APP DEVELOPMENT TO UI/UX DESIGN, PROJECT MANAGEMENT AND EVERYTHING YOU NEED TO EXECUTE YOUR DIGITAL STRATEGY."
                overlayOpacity={0.6}
                fullHeight={false}
            />
            
            <Services />
        </>
    );
};

export default ServicesPage;