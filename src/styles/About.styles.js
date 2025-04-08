// About.styles.js
import styled from "styled-components";
import { colors } from "../constants";

export const StyledAboutContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 4rem;

    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }

    @media (max-width: 480px) {
        padding: 2rem 1rem;
    }
`;

export const StyledSectionContainer = styled.div`
    display: flex;
    gap: 4rem;
    margin-bottom: 5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 3rem;
    }
`;

export const StyledSectionTitle = styled.h2`
    flex: 0 0 25%;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    align-self: flex-start;

    @media (max-width: 768px) {
        margin-bottom: 0.5rem;
        text-align: center;
    }
`;

export const StyledSectionContent = styled.div`
    flex: 1;
`;

export const StyledSectionText = styled.p`
    font-size: 1.125rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const StyledValueItem = styled.p`
    font-size: 1.125rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;

    strong {
        font-weight: 600;
    }
`;

export const StyledQuoteSection = styled.div`
    text-align: center;
    margin: 6rem 0;
    padding: 0 2rem;

    @media (max-width: 768px) {
        margin: 4rem 0;
    }
`;

export const StyledQuote = styled.blockquote`
    font-size: 2rem;
    line-height: 1.4;
    font-style: italic;
    max-width: 80%;
    margin: 0 auto 1rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        max-width: 100%;
    }
`;

export const StyledQuoteAuthor = styled.cite`
    font-size: 1.25rem;
    font-style: normal;
`;

// Keep these existing styles for compatibility
export const AboutStyledDisplayHeading = styled.h1`
    font-size: 4rem;
    font-weight: normal;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    font-family: maitree;

    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 480px) {
        font-size: 2.5rem;
        text-align: left;
    }
`;

export const StyledHightlightText = styled.span`
    color: ${colors.yellow};
    font-family: maitree;
`;

export const StyledHightlightH2Text = styled.span`
    color: ${colors.yellow};
    font-family: maitree;
    font-size: 2.5rem;
`;

export const StyledAboutH1 = styled.h1`
    font-size: 2.5rem;
    font-family: maitree;
    font-weight: normal;
    line-height: 1.4;
    max-width: 80%;

    @media (max-width: 768px) {
        max-width: 100%;
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
        max-width: 100%;
        text-align: left;
    }
`;

export const StyledAboutH2 = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.4;
    max-width: 70%;

    @media (max-width: 768px) {
        font-size: 1.8rem;
        max-width: 80%;
    }

    @media (max-width: 480px) {
        font-size: 1.6rem;
        max-width: 100%;
        text-align: left;
    }
`;

export const StyledColSections = styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    gap: 1.5em;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
    }
`;

export const StyledH1SpacingSection = styled.div`
    margin: 4.125rem 0 1.5rem;

    @media (max-width: 480px) {
        margin: 3rem 0 1rem;
    }
`;

export const StyledAboutSubheading = styled.h3`
    margin-top: 1rem;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.4;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
        text-align: left;
    }
`;

export const StyledAboutContent = styled.p`
    font-size: 1rem;
    color: #666666;
    margin-top: 1rem;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
        font-size: 0.9rem;
        text-align: left;
    }
`;

export const StyledAboutSideHeading = styled.p`
    flex-basis: 25%;
    max-width: 200px;
    text-align: left;
    margin-top: 10px;

    @media (max-width: 768px) {
        max-width: 100%;
        text-align: left;
    }
`;

export const StyledAboutParagraphBreak = styled.span`
    display: block;
    margin-top: 2rem;
    font-family: maitree;
`;

export const Styled3ColSection = styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
`;

export const StyledOurWorkH1 = styled.h1`
    font-size: 2.5rem;
    font-family: maitree;
    font-weight: normal;
    line-height: 1.4;
    width: 65%;

    @media (max-width: 768px) {
        font-size: 2rem;
        width: 80%;
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
        width: 100%;
        text-align: left;
    }
`;