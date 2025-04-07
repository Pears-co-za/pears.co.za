// About.js
import React from "react";
import Hero from "../layout/Hero";
import {
    StyledAboutContainer,
    StyledQuoteSection,
    StyledQuote,
    StyledQuoteAuthor,
    StyledSectionContainer,
    StyledSectionTitle,
    StyledSectionContent,
    StyledSectionText,
    StyledValueItem,
} from "../../styles/About.styles";

function About() {
    return (
        <>
            <Hero
                backgroundImage="/assets/about-hero-bg.png"
                title="ABOUT US"
                overlayOpacity={0.3}
                fullHeight={false}
            />

            <StyledAboutContainer>
                <StyledSectionContainer className="section-container">
                    <StyledSectionTitle id="our-story">
                        • OUR STORY
                    </StyledSectionTitle>
                    <StyledSectionContent className="section-content">
                        <StyledSectionText>
                            At Pears, we empower businesses with cutting-edge
                            technology solutions that drive innovation,
                            efficiency, and growth. As a leading tech consulting
                            firm, we specialize in strategy, digital
                            transformation, and custom solutions tailored to
                            your unique needs.
                        </StyledSectionText>

                        <StyledSectionText>
                            Our team of experts partners with organizations of
                            all sizes to streamline operations, enhance user
                            experiences, and future-proof their technology.
                            Whether it's optimizing existing systems or building
                            new digital solutions from the ground up, we bring
                            deep industry knowledge, technical expertise, and a
                            commitment to excellence.
                        </StyledSectionText>

                        <StyledSectionText>
                            Let's build the future together—one breakthrough at
                            a time.
                        </StyledSectionText>
                    </StyledSectionContent>
                </StyledSectionContainer>

                <StyledSectionContainer className="section-container">
                    <StyledSectionTitle id="our-vision">
                        • OUR VISION 
                    </StyledSectionTitle>
                    <StyledSectionContent className="section-content">
                        <StyledSectionText>
                            Our vision is to redefine the future of technology
                            by empowering businesses with innovative, scalable,
                            and transformative solutions. We believe that
                            technology should not only solve problems but also
                            unlock new opportunities for growth, efficiency, and
                            impact.
                        </StyledSectionText>

                        <StyledSectionText>
                            Our goal is to be a trusted partner in digital
                            transformation, helping organizations navigate
                            complexity, embrace emerging technologies, and stay
                            ahead of the curve. Through collaboration,
                            creativity, and cutting-edge expertise, we strive to
                            shape a smarter, more connected world—one solution
                            at a time.
                        </StyledSectionText>
                    </StyledSectionContent>
                </StyledSectionContainer>

                <StyledSectionContainer className="section-container">
                    <StyledSectionTitle id="our-values">
                        • OUR VALUES
                    </StyledSectionTitle>
                    <StyledSectionContent className="section-content">
                        <StyledSectionText>
                            Our values define who we are and how we operate.
                            They guide our decisions, shape our culture, and
                            drive us to deliver exceptional results for our
                            clients.
                        </StyledSectionText>

                        <StyledValueItem>
                            <strong>Innovation</strong> – We embrace creativity
                            and forward-thinking to develop cutting-edge
                            solutions that solve real-world challenges.
                        </StyledValueItem>

                        <StyledValueItem>
                            <strong>Collaboration</strong> – Success is built on
                            teamwork. We work closely with our clients and
                            partners to create meaningful and lasting impact.
                        </StyledValueItem>

                        <StyledValueItem>
                            <strong>Integrity</strong> – Transparency, honesty,
                            and ethical practices are at the core of everything
                            we do. We build trust through our actions.
                        </StyledValueItem>

                        <StyledValueItem>
                            <strong>Excellence</strong> – We are committed to
                            delivering high-quality solutions that exceed
                            expectations and drive measurable results.
                        </StyledValueItem>

                        <StyledValueItem>
                            <strong>Customer-Centric Approach</strong> – Our
                            clients' success is our success. We prioritize their
                            needs and tailor solutions to help them achieve
                            their goals.
                        </StyledValueItem>
                    </StyledSectionContent>
                </StyledSectionContainer>

                <StyledQuoteSection>
                    <StyledQuote>
                        "The bee is more honored than other animals, not because
                        she labors, but because she labors for others."
                    </StyledQuote>
                    <StyledQuoteAuthor>
                        – Saint John Chrysostom
                    </StyledQuoteAuthor>
                </StyledQuoteSection>
            </StyledAboutContainer>
        </>
    );
}

export default About;