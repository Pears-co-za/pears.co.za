import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// This version uses an image file instead of SVG
const StyledBeeButton = styled(Link)`
    background-color: #759066;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    img {
        width: 18px;
        height: 18px;
        transition: transform 0.3s ease;
    }
    
    &:hover {
        background-color: #F8E16D; /* Pale yellow color */
        color: #000000; /* Black color */
        
        img {
            transform: translateY(-3px);
        }
    }
`;

const ButtonWithBee = ({ children, to, className }) => {
    return (
        <StyledBeeButton to={to} className={className}>
            {children}
            <img src="/assets/bee-btn-icon.png" alt="Bee icon" />
        </StyledBeeButton>
    );
};

export { ButtonWithBee };
export default ButtonWithBee;