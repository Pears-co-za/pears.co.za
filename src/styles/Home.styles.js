import styled from "styled-components";
import { colors } from "../constants";

export const StyledHomeContainer = styled.div`
    padding: 2rem 4rem;
    max-width: 1280px;
    margin: 0 auto;
    @media (max-width: 768px) {
        padding: 1.5rem 2rem;
    }

    @media (max-width: 480px) {
        padding: 1rem;
    }
`;

export const StyledDisplayHeading = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    line-height: 1.2;
    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 480px) {
        font-size: 2.5rem;
        text-align: left;
    }
`;

export const StyledHightlightText = styled.span`
    color: ${colors.paleYellow};
`;

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
