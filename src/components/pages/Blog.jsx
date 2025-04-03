import React from "react";
import {
    StyledBlogContainer,
} from "../../styles/Blog.styles";
import FadeIn from "../common/FadeIn";

const Blog = () => {
    return (
        <StyledBlogContainer>
            <FadeIn delay={200}>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h2>Beyond the Welcome Mat</h2>
                        <p>please step inside</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe minus laboriosam cum modi ipsum expedita facere nam! Modi est consequuntur magni voluptates in.</p>
                    </div>
                </div>
            </FadeIn>
        </StyledBlogContainer>
    );
};

export default Blog;
