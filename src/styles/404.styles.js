import styled from "styled-components";
import { colors } from "../constants";

export const Styled404Container = styled.div`
    padding: 1rem 2rem;
    margin-bottom: 4rem;
     @media only screen and (max-width: 600px){
        padding: 1rem 1rem;
    }
`;

export const StyledDisplayHeading = styled.div`
    display:flex;
    flex-direction: column;
    padding: 1rem 4rem;
    flex-wrap:wrap;
    word-break: normal;
`;

export const StyledHightlightText = styled.span`
    color: ${colors.dark50};
`;

export const StyledH1 = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 3.5rem;

    @media only screen and (max-width: 600px){
        font-size: 2.2rem;
    }
`;
