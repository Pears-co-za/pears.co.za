import styled from "styled-components";
import { colors } from "../constants";


export const StyledHomeContainer = styled.div`
    padding: 2rem 4rem;
    max-width: 1280px;
    margin: 0 auto;
`;

export const StyledDisplayHeading = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    line-height: 1.2;
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
`;

export const StyledH1 = styled.h1`
    font-size: 2%.5;
    font-weight: 500;
    line-height: 1.4;
    max-width: 530px;
`;

export const StyledServicesSection = styled.div`
margin: 4.125rem 0 3rem;
`;