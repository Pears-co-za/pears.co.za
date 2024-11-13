import React from "react";
import {
    StyledFooterContainer,
    StyledLeftSection,
    StyledRightSection,
    StyledHeading,
    StyledNavLinks,
    StyledNavLink,
    StyledTalkButton,
    StyledCopyright,
} from "../../styles/Footer.styles";

function Footer() {
    return (
        <StyledFooterContainer>
            <StyledLeftSection>
                <div>
                    <p>Contact</p>
                    <StyledHeading>
                        Let's start
                        <br />
                        creating
                        <br />
                        together
                    </StyledHeading>
                    <StyledTalkButton to="/contact">
                        Let's talk{" "}
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </StyledTalkButton>
                </div>
                <StyledCopyright>2024 Pears Consulting</StyledCopyright>
            </StyledLeftSection>

            <StyledRightSection>
                <StyledNavLinks>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="/about">About</StyledNavLink>
                    <StyledNavLink to="/contact">Contact</StyledNavLink>
                </StyledNavLinks>
            </StyledRightSection>
        </StyledFooterContainer>
    );
}

export default Footer;
