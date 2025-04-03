import "../../styles/App.css";
import React, { useState, useEffect } from "react";
import {
    StyledNavContainer,
    StyledLogo,
    StyledNavLinks,
    StyledNavLink,
    StyledHamburger,
    StyledOverlay
} from "../../styles/Navbar.styles";
import { useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;
            const isScrolledPastThreshold = currentScrollPos > 100;

            setIsVisible(!isScrollingDown || !isScrolledPastThreshold);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <StyledNavContainer $isVisible={isVisible}>
                <StyledLogo to="/">
                    <img
                        src="/assets/pears-logo-with-name.png"
                        className="pears-logo"
                        alt="pears logo"
                    />
                </StyledLogo>
                <StyledHamburger onClick={toggleMenu} $isOpen={isMenuOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </StyledHamburger>
                <StyledNavLinks $isOpen={isMenuOpen}>
                    <StyledNavLink 
                        to="/" 
                        className={location.pathname === "/" ? "active" : ""}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </StyledNavLink>
                    <StyledNavLink 
                        to="/about" 
                        className={location.pathname === "/about" ? "active" : ""}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About Us
                    </StyledNavLink>
                    <StyledNavLink 
                        to="/services"
                        className={location.pathname === "/services" ? "active" : ""}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Our Services
                    </StyledNavLink>
                    <StyledNavLink 
                        to="/blog"
                        className={location.pathname === "/blog" ? "active" : ""}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blog
                    </StyledNavLink>
                    <StyledNavLink 
                        to="/contact"
                        className={location.pathname === "/contact" ? "active" : ""}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </StyledNavLink>
                </StyledNavLinks>
            </StyledNavContainer>
            <StyledOverlay 
                $isOpen={isMenuOpen} 
                onClick={() => setIsMenuOpen(false)}
            />
        </>
    );
}

export default Navbar;