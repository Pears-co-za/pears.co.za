import React from "react";
import {
    StyledBlogContainer,
    StyledDisplayHeading,
    StyledH1,
    StyledHightlightText,
} from "../../styles/Blog.styles";
import FadeIn from "../common/FadeIn";

const Blog = () => {
    return (
        <StyledBlogContainer>
            <FadeIn delay={200}>
                <StyledDisplayHeading>
                    <StyledH1>This is the Blog</StyledH1>
                </StyledDisplayHeading>
            </FadeIn>
        </StyledBlogContainer>
    );
};

export default Blog;
