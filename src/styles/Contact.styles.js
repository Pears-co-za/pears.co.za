import styled from "styled-components";


export const StyledContactContainer = styled.div`
    padding: 2rem 4rem;
    min-width: 100vw;
    @media only screen and (min-width: 1540px){
        padding: 2rem 14rem;
    }

    @media only screen and (max-width: 500px){
        border: 4px black dotted;
        padding: 2rem 1rem;
    }
`;

export const StyledDisplayHeading = styled.div`
    display:flex;
    border: 1px red solid;
    flex-wrap: wrap;
    
    // 0 - 1540px (width) & 0 - 890px (height)
    @media only screen and (max-width: 1540px) and (max-height: 890px){
  
    }

    @media only screen and (max-width: 500px){
        padding: 0rem 2rem;
    }
        
`;
export const LeftPanel = styled.div`
    display:flex;
    flex-direction: column;
    height: 90%; 
    flex: 2;
    justify-content: space-between;
    word-break: normal;
`;
export const RightPanel = styled.div`
    display:flex;
    flex-direction: column;
    //height: 90%;
    justify-content: flex-end;
    border: 1px red solid;
    flex: 0 0 300px;
    margin-top: 1.5rem;

    @media only screen and (max-width: 800px){
        flex-shrink: 2;
        width: min-content;
        border: 1px purple solid;
    }

    @media only screen and (max-width: 400px){
        // border: 1px red solid;
        flex-shrink: 2;
        min-width: 200px;
        border: 1px black dotted;
        margin: 1.5rem 1rem 0rem;
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
        // border: 1px red solid;
    }
`;

export const StyledServicesSection = styled.div`
margin: 4.125rem 0 3rem;
`;
