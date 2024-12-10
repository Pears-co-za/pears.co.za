import styled from "styled-components";

export const StyledContactContainer = styled.div`
    padding: 3rem 4rem;
    margin-bottom: 2rem;
    @media only screen and (min-width: 1540px){
        padding: 2rem 14rem;
    }

    @media only screen and (max-width: 500px){
        padding: 2rem 1rem;
        width: 100%;
        min-width:350px;
        margin-bottom: 0.5rem;
    }
`;

export const StyledDisplayHeading = styled.div`
    display:flex;
    flex-wrap: wrap;
    
    @media only screen and (max-width: 500px){
        padding: 0rem 1rem;
    }
`;
export const LeftPanel = styled.div`
    display:flex;
    flex-direction: column;
    flex: 2;
    justify-content: space-between;
    word-break: normal;
`;
export const RightPanel = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 0 0 300px;
    margin-top: 1.5rem;


    @media only screen and (max-width: 800px){
        flex-shrink: 2;
        width: min-content;
        gap: 1rem;
        margin: 1.5rem auto 0rem;
    }
`;

export const StyledH1 = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    margin: 1.1rem 0;
    font-family: "Century", "Helvetica", sans-serif;

    @media only screen and (max-width: 1540px){
        font-size: 3rem;
    }
`;

export const StyledH2 = styled.h2`
    font-size: 1.3rem;
    font-weight: 550;
    line-height: 1.6;

    @media only screen and (max-width: 1540px){
        font-size: 1.1rem;
    }
`;
