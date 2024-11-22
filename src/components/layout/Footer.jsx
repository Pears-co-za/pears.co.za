import React from "react";
import { ButtonCTA } from '../common/ButtonCTA';
import {
    StyledFooterContainer,
    StyledLeftSection,
    StyledRightSection,
    StyledHeading,
    StyledNavLinks,
    StyledNavLink,
    StyledCopyright,
} from "../../styles/Footer.styles";

function Footer() {
    return (
        <StyledFooterContainer>
            <StyledLeftSection>
                <div>
                    <p>Contact</p>
                    <StyledHeading>
                        Let's start creating together
                    </StyledHeading>
                    <ButtonCTA to="/contact">Let's talk</ButtonCTA>
                </div>
                <StyledCopyright>2024 Pears Consulting</StyledCopyright>
            </StyledLeftSection>

            <StyledRightSection>
                <StyledNavLinks>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="/">About</StyledNavLink>
                    <StyledNavLink to="/">Contact</StyledNavLink>
                </StyledNavLinks>
            </StyledRightSection>
        </StyledFooterContainer>
    );
}

export default Footer;
