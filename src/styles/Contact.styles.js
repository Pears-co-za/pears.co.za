import styled from "styled-components";


export const StyledContactContainer = styled.div`
    padding: 2rem 14rem;
    @media only screen and (max-width: 1540px){
        padding: 2rem 8rem;
    }

    @media only screen and (max-width: 500px){
        //height: 90vh;
        border: 1px black dotted;
        padding: 2rem 1rem;
    }
`;

export const StyledDisplayHeading = styled.div`
    display:flex;
    // padding: 2rem 4rem;
    //height: 60vh;
    border: 1px red solid;
    flex-wrap: wrap;
    
    // 0 - 1540px (width) & 0 - 890px (height)
    @media only screen and (max-width: 1540px) and (max-height: 890px){
        //height: 85vh;
    }

    @media only screen and (max-width: 500px){
        border: 1px red solid;
        padding: 0rem 4rem;
    }
        
`;
export const LeftPanel = styled.div`
    display:flex;
    flex-direction: column;
    height: 90%; 
    flex: 2;
    //border: 1px blue solid;
    justify-content: space-between;
    word-break: normal;
    // flex-wrap: wrap
`;
export const RightPanel = styled.div`
    display:flex;
    flex-direction: column;
    //height: 90%;
    justify-content: flex-end;
    border: 1px red solid;
    flex: 0 0 300px;

    @media only screen and (max-width: 870px){
        justify-content: flex-start;
        flex-shrink: 2;
        min-width: 200px
    }

    @media only screen and (max-width: 500px){
        border: 1px black dotted;
        height: fit-content;
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
        border: 1px red solid;
    }
`;

export const StyledServicesSection = styled.div`
margin: 4.125rem 0 3rem;
`;
