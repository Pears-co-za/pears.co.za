import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../constants";

export const StyledFooterContainer = styled.footer`
    background-color: #759066;
    padding: 4rem 4rem 2rem;
    color: ${colors.white};
    
    @media (max-width: 768px) {
        padding: 3rem 2rem 1.5rem;
    }
`;

export const StyledFooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    gap: 2rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2.5rem;
    }
`;

export const StyledFooterLogo = styled.div`
    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
    }
`;

export const StyledFooterSection = styled.div`
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const StyledFooterHeading = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: ${colors.white};
`;

export const StyledFooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const StyledFooterLink = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s ease;
    
    &:hover {
        color: ${colors.paleYellow};
        text-decoration: underline;
    }
`;

export const StyledFooterText = styled.p`
    font-size: 0.875rem;
    color: ${colors.white};
    margin: 0;
    max-width: 250px;
`;

export const StyledFooterSocialIcons = styled.div`
    display: flex;
    gap: 1rem;
`;


export const StyledFooterBottomText = styled.p`
    text-align: center;
    margin-top: 3rem;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
`;

export const StyledSocialIcon = styled.a`
  font-size: 30px; 
  color: ${colors.white};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: ${colors.paleYellow};
    scale: 1.25;
    
  }
`;