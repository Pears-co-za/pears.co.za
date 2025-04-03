import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../constants";

export const StyledHeroSection = styled.div`
    height: ${props => props.$fullHeight ? '100vh' : '50vh'};
    width: 100%;
    position: relative;
    background-image: ${props => `url('${props.$backgroundImage}')`};
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledBackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, ${props => props.$opacity || 0.5});
`;

export const StyledHeroContent = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 0 4rem;
    position: relative;
    z-index: 2;
    
    @media (max-width: 768px) {
        padding: 0 2rem;
    }

    @media (max-width: 480px) {
        padding: 0 1rem;
    }
`;

export const StyledHeroText = styled.div`
    max-width: 750px;
    text-align: ${props => props.$textAlign || 'left'};
    margin: ${props => props.$textAlign === 'center' ? '0 auto' : '0'};
`;

export const StyledHeroHeading = styled.h1`
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 1.2;
    color: ${colors.white};
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const StyledHeroSubtitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 400;
    color: ${colors.white};
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
        font-size: 1.125rem;
    }
`;

export const StyledHeroButton = styled(Link)`
    background-color: ${colors.white};
    color: ${colors.black};
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    text-decoration: none;
    display: inline-block;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: ${colors.paleYellow};
    }
`;