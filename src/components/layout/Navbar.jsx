import "../../styles/App.css";
import React from "react";
import {
    StyledNavContainer,
    StyledLogo,
    StyledNavLinks,
    StyledNavLink,
} from "../../styles/Navbar.styles";

function Navbar() {
    return (
        <StyledNavContainer>
            <StyledLogo to="/">
                <img
                    src="./assets/logo-temp.jpeg"
                    className="pears-logo"
                    alt="pears bee logo"
                />
                pears
            </StyledLogo>
            <StyledNavLinks>
                <StyledNavLink to="/about">About</StyledNavLink>
                <StyledNavLink to="/contact">Contact</StyledNavLink>
            </StyledNavLinks>
        </StyledNavContainer>
    );
}

export default Navbar;
