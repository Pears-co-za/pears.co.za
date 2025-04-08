import React from "react";
import {
    StyledFooterContainer,
    StyledFooterContent,
    StyledFooterLogo,
    StyledFooterSection,
    StyledFooterHeading,
    StyledFooterLinks,
    StyledFooterLink,
    StyledFooterText,
    StyledFooterSocialIcons,
    StyledSocialIcon,
    StyledFooterBottomText,
} from "../../styles/Footer.styles";

import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <StyledFooterContainer>
            <StyledFooterContent>
                <StyledFooterSection>
                    <StyledFooterLogo>
                        <h2>Pears Consulting</h2>
                        <StyledFooterText>
                            Because <span style={{color: "black" }}>IT</span> works better in pairs.
                        </StyledFooterText>
                    </StyledFooterLogo>
                </StyledFooterSection>

                <StyledFooterSection>
                    <StyledFooterHeading>Work</StyledFooterHeading>
                    <StyledFooterLinks>
                        <StyledFooterLink to="/about">
                            Our Work
                        </StyledFooterLink>
                        <StyledFooterLink to="/about#">
                            Our Processes
                        </StyledFooterLink>
                    </StyledFooterLinks>
                </StyledFooterSection>

                <StyledFooterSection>
                    <StyledFooterHeading>Services</StyledFooterHeading>
                    <StyledFooterLinks>
                        <StyledFooterLink to="/services#itAdvisoryCounsulting">
                            IT Consulting and Advisory
                        </StyledFooterLink>
                        <StyledFooterLink to="/services#uiUxDesign">
                            UX/UI Designs
                        </StyledFooterLink>
                        <StyledFooterLink to="/services#applicationDevelopment">
                            Application Development
                        </StyledFooterLink>
                        <StyledFooterLink to="/services#projectManagement">
                            Project Management
                        </StyledFooterLink>
                    </StyledFooterLinks>
                </StyledFooterSection>

                <StyledFooterSection>
                    <StyledFooterHeading>Team</StyledFooterHeading>
                    <StyledFooterLinks>
                        <StyledFooterLink to="/about">About Us</StyledFooterLink>
                        <StyledFooterLink to="/contact">
                            Contact Us
                        </StyledFooterLink>
                    </StyledFooterLinks>
                </StyledFooterSection>

                <StyledFooterSection>
                    <StyledFooterHeading>Follow</StyledFooterHeading>
                    <StyledFooterSocialIcons>
                    <StyledSocialIcon href="https://www.linkedin.com/in/pears-consulting-1842b635b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </StyledSocialIcon>
                    <StyledSocialIcon href="https://www.instagram.com/pears.consulting/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </StyledSocialIcon>
                </StyledFooterSocialIcons>
            </StyledFooterSection>
            </StyledFooterContent>
            <StyledFooterBottomText>
                © 2025 Pears Consulting. All rights reserved.
            </StyledFooterBottomText>
        </StyledFooterContainer>
    );
}

export default Footer;
