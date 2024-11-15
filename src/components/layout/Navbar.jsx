import "../../styles/App.css";
import React, { useState, useEffect } from "react";
import {
    StyledNavContainer,
    StyledLogo,
    StyledNavLinks,
    StyledNavLink,
} from "../../styles/Navbar.styles";

function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;
            const isScrolledPastThreshold = currentScrollPos > 100; // Only hide after scrolling past 100px

            // Update visibility based on scroll direction and threshold
            setIsVisible(!isScrollingDown || !isScrolledPastThreshold);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
            <StyledNavContainer $isVisible={isVisible}>
                <StyledLogo to="/">
                    <img
                        src="./assets/pears-logo-black.jpeg"
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
            <div style={{ paddingTop: "74px" }} />
        </>
    );
}

export default Navbar;
