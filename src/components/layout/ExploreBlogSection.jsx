import React from "react";
import styled from "styled-components";
import { ButtonWithBee } from "../common/ButtonWithBee";

const ExploreBlogSection = () => {
    return (
        <StyledExploreBlogSection>
            {/* <StyledExploreBlogOverlay /> */}
            <StyledExploreBlogContent>
                <StyledExploreBlogLabel>Blog</StyledExploreBlogLabel>
                <StyledExploreBlogHeading>
                    Explore Our Insights
                </StyledExploreBlogHeading>
                <ButtonWithBee to="/blog">Read our Blog</ButtonWithBee>
            </StyledExploreBlogContent>
        </StyledExploreBlogSection>
    );
};

const StyledExploreBlogSection = styled.section`
    background-color: #f9faf8;
    position: relative;
    width: 100%;
    height: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
    text-align: center;
`;

const StyledExploreBlogContent = styled.div`
    position: relative;
`;

const StyledExploreBlogLabel = styled.div`
    font-size: 1rem;
    color: black;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const StyledExploreBlogHeading = styled.h2`
    font-size: 3.5rem;
    font-weight: 500;
    color: black;
    margin-bottom: 1rem;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`;

export default ExploreBlogSection;
