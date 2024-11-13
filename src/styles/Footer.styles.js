import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../constants";

export const StyledFooterContainer = styled.footer`
    background-color: ${colors.yellow};
    padding: 2rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 80vh;
`;

export const StyledLeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    background-color: white;
    color: black;
    padding: 0.75rem 1.5rem;
    border-radius: 100px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;

    &:hover {
        transform: translateY(-2px);
        transition: transform 0.2s ease;
    }
`;

export const StyledCopyright = styled.p`
    color: ${colors.black};
    font-size: 1rem;
    margin-top: auto;
`;
