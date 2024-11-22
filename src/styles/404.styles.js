import styled from "styled-components";
import { colors } from "../constants";

export const Styled404Container = styled.div`
    padding: 1rem 2rem;
`;

export const StyledDisplayHeading = styled.div`
    display:flex;
    flex-direction: column;
    padding: 2rem 4rem;
    flex-wrap:wrap;
    height: 60vh;
    word-break: normal;

    // 0 - 1540px (width) & 0 - 890px (height)
    @media only screen and (max-width: 1540px) and (max-height: 890px){
        height: 90vh;
    }
`;


export const StyledHightlightText = styled.span`
    color: ${colors.dark50};
`;

export const StyledH1 = styled.h1`
    font-size: 3.7rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 3.5rem;

    @media only screen and (max-width: 880px){
        font-size: 2.5rem;
    }
`;


// export const StyledWeight = styled.div`
//     font-weight: 450;
//     color: black;
// `;
