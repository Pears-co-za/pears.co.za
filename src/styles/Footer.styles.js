import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../constants";

export const StyledFooterContainer = styled.footer`
    background-color: ${colors.black};
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-around;
    min-height: 50vh;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: start;
        gap: 24px;
    }
`;

export const StyledLeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    color: ${colors.white};



`;

export const StyledRightSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const StyledHeading = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 2rem;
    max-width: 65%;

    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 480px) {
        font-size: 2.5rem;
        max-width: 100%;
    }
`;

export const StyledNavLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const StyledNavLink = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
    font-size: 1.1rem;

    &:hover {
        text-decoration: underline;
        color: ${colors.yellow};
    }
`;

export const StyledHightlightText = styled.span`
    color: ${colors.paleYellow};
`;

export const StyledTalkButton = styled(Link)`
    background-color: ${colors.grey5};
    color: black;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
    border-radius: 100px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;

    &:hover {
      border: 1px solid black;
      background-color: ${colors.white};
    }
`;

export const StyledCopyright = styled.p`
    color: ${colors.dark70};
    font-size: 1rem;
    font-weight: medium;
    margin-top: auto;
    color: ${colors.white};

`;
