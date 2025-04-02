import styled from "styled-components";
import { colors } from "../constants";

export const StyledHomeContainer = styled.div`
    padding: 4rem;
    max-width: 1280px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }

    @media (max-width: 480px) {
        padding: 2rem 1rem;
    }
`;

export const StyledHightlightText = styled.span`
    color: ${colors.paleYellow};
`;

/* Why Choose Us Section Styles */
export const StyledWhyChooseUsSection = styled.section`
    padding: 4rem 0;
    background-color: #f9f9f9;
    text-align: center;
`;

export const StyledSectionTitle = styled.h2`
    font-size: 2.25rem;
    font-weight: 600;
    margin-bottom: 3.5rem;
    color: ${colors.black};
`;

export const StyledFeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledFeatureCard = styled.div`
    background-color: #ffffff;
    padding: 2.5rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
`;

export const StyledFeatureImage = styled.img`
    width: 140px;
    height: 140px;
    object-fit: contain;
    margin-bottom: 1.5rem;
`;

export const StyledFeatureTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${colors.black};
`;

export const StyledFeatureDescription = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
`;

/* Collaboration Section Styles */
export const StyledCollaborationSection = styled.section`
    padding: 5rem 2rem;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
`;

export const StyledCollaborationTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: ${colors.black};
`;

export const StyledCollaborationText = styled.p`
    font-size: 1.125rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 1.5rem;
`;

export const StyledCTAWrapper = styled.div`
    margin-top: 3rem;
    
    a {
        background-color: #759066;
        color: white;
        
        &:hover {
            background-color: ${colors.paleYellow};
            color: ${colors.black};
        }
    }
`;

/* Other existing Home styles */
export const Styled3ColSection = styled.div`
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
    }
`;

export const StyledH1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.4;
    max-width: 530px;

    @media (max-width: 768px) {
        max-width: 100%;
        font-size: 1.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1.6rem;
        max-width: 100%;
        text-align: left;
    }
`;

export const StyledServicesSection = styled.div`
    margin: 4.125rem 0 3rem;
`;