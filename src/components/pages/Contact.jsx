import React from "react";
import FadeIn from "../common/FadeIn";
import Hero from "../layout/Hero";
import {
    StyledContactPage,
    StyledContactContainer,
    StyledContactImagesContainer,
    StyledContactImage,
} from "../../styles/Contact.styles";
import ContactSection from "../common/ContactSection";

function Contact() {
    return (
        <StyledContactPage>
            <Hero
                backgroundImage="/assets/contact-hero-bg.png"
                title="CONTACT US"
                subtitle="WE ARE HERE TO HELP"
                fullHeight={false}
            />

            <StyledContactContainer>
                <FadeIn>
                    <StyledContactImagesContainer>
                        <StyledContactImage
                            src="/assets/contact-img-1.png"
                            alt="Person with dashboard"
                        />
                        <StyledContactImage
                            src="/assets/contact-img-2.png"
                            alt="Person with analytics"
                        />
                        <StyledContactImage
                            src="/assets/contact-img-3.png"
                            alt="Person with laptop"
                        />
                        <StyledContactImage
                            src="/assets/contact-img-4.png"
                            alt="Person with presentation"
                        />
                    </StyledContactImagesContainer>
                </FadeIn>

                <ContactSection />
            </StyledContactContainer>
        </StyledContactPage>
    );
}

export default Contact;
