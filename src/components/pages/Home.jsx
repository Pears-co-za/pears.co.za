import React from "react";
import Hero from "../layout/Hero";
import ButtonWithBee from "../common/ButtonWithBee";
import ContactSection from "../common/ContactSection";
import FadeIn from "../common/FadeIn";
import {
    StyledHomeContainer,
    StyledWhyChooseUsSection,
    StyledSectionTitle,
    StyledFeaturesGrid,
    StyledFeatureCard,
    StyledFeatureImage,
    StyledFeatureTitle,
    StyledFeatureDescription,
    StyledCollaborationSection,
    StyledCollaborationTitle,
    StyledCollaborationText,
    StyledCTAWrapper,
    StyledHomeContactSection,
} from "../../styles/Home.styles";

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
            <StyledWhyChooseUsSection>
                <StyledSectionTitle>Why Choose Us</StyledSectionTitle>

                <StyledFeaturesGrid>
                    <StyledFeatureCard>
                        <StyledFeatureImage
                            src="/assets/dynamic-it-partnerships.png"
                            alt="Dynamic IT Partnerships"
                        />
                        <StyledFeatureTitle>
                            Dynamic IT Partnerships
                        </StyledFeatureTitle>
                        <StyledFeatureDescription>
                            Our collaborative methodologies ensure that
                            technology becomes a seamless extension of your
                            business, driving efficiency and sparking
                            innovation.
                        </StyledFeatureDescription>
                    </StyledFeatureCard>

                    <StyledFeatureCard>
                        <StyledFeatureImage
                            src="/assets/tailored-solutions.png"
                            alt="Tailored Solutions for Growth"
                        />
                        <StyledFeatureTitle>
                            Tailored Solutions for Growth
                        </StyledFeatureTitle>
                        <StyledFeatureDescription>
                            Our custom IT solutions are designed to meet the
                            unique needs of your business, ensuring that you
                            stay ahead in a rapidly evolving landscape.
                        </StyledFeatureDescription>
                    </StyledFeatureCard>

                    <StyledFeatureCard>
                        <StyledFeatureImage
                            src="/assets/strategies-for-transformation.png"
                            alt="Strategies for Transformation"
                        />
                        <StyledFeatureTitle>
                            Strategies for Transformation
                        </StyledFeatureTitle>
                        <StyledFeatureDescription>
                            We leverage advanced technology and collaborative
                            strategies to transform how businesses operate,
                            placing you on the path to success.
                        </StyledFeatureDescription>
                    </StyledFeatureCard>
                </StyledFeaturesGrid>
            </StyledWhyChooseUsSection>

            <StyledCollaborationSection>
                <StyledCollaborationTitle>
                    Harness the Power of Collaboration
                </StyledCollaborationTitle>
                <StyledCollaborationText>
                    Experience a transformation in your operations as we
                    implement tailored IT solutions designed specifically for
                    your unique challenges. Our approach is inspired by the
                    natural synergy of bees, cultivating a vibrant ecosystem
                    that supports your business in achieving its full potential.
                </StyledCollaborationText>
                <StyledCollaborationText>
                    Join us in redefining what's possible. Embrace a partnership
                    that values your vision and propels your growth. Let us help
                    you articulate your narrative, engage your target audience
                    effectively, and elevate your brand to new heights of
                    success.
                </StyledCollaborationText>
                <StyledCTAWrapper>
                    <ButtonWithBee to="/contact">Connect With Us</ButtonWithBee>
                </StyledCTAWrapper>
            </StyledCollaborationSection>

            <StyledHomeContainer>Other content here</StyledHomeContainer>

            <StyledHomeContactSection>
                <FadeIn>
                    <ContactSection variant="home" />
                </FadeIn>
            </StyledHomeContactSection>
        </>
    );
}

export default Home;
