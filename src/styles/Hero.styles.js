import styled from "styled-components";
import { colors } from "../constants";

export const StyledHeroSection = styled.div`
    height: ${props => props.$fullHeight ? '100vh' : '60vh'};
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
    max-width: 970px;
    text-align: ${props => props.$textAlign || 'center'};
    margin: ${props => props.$textAlign === 'center' ? '0 auto' : '0'};
`;

export const StyledHeroHeading = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${colors.white};
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;
