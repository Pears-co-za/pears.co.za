import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../constants";

export const StyledFooterContainer = styled.footer`
    background-color: ${colors.yellow};
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-around;
    min-height: 50vh;
`;

export const StyledLeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
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
`;

export const StyledNavLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const StyledNavLink = styled(Link)`
    color: ${colors.black};
    text-decoration: none;
    font-size: 1.1rem;

    &:hover {
        text-decoration: underline;
    }
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
`;
