import styled from "styled-components";
import { colors } from "../../constants";

export const StyledBlogContainer = styled.div`
    width: min(90%, 1300px);
    margin: 2.6rem auto;

    @media (min-width: 1000px) {
        display:flex;
    }
}
`;

export const StyledDisplayHeading = styled.div`
    display:flex;
    flex-direction: column;
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
