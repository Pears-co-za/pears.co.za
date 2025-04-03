import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
    StyledBlogContainer,
} from "./BlogEntry.styled";
import FadeIn from "../common/FadeIn";
import styles from './BlogEntry.module.css';

const BlogEntry = ({ blogs }) => {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === parseInt(id));

    console.log(blog.image);

    return (
        <StyledBlogContainer>
            <FadeIn delay={200}>
                <div className="{styles.previous__page}">
                    <Link to={`/blog`}>Read Post</Link>
                </div>

                <div className={styles.center__content}>
                    <div className={styles.cards}>
                        {blog ? (
                            <div className={styles.card} key={blog.id}>
                                <div >
                                    <img
                                        src={blog.image}
                                        className={styles.card__image}
                                        alt="card image"
                                    />
                                </div>
                                <div className={styles.card__text}>
                                    <h2 className={styles.card__h2}>{blog.title}</h2>
                                    <p className={styles.card__p}>{blog.content}</p>
                                </div>
                            </div>
                        ) : (
                            <p>Blog not found!</p>
                        )}
                    </div>
                </div>
            </FadeIn>
        </StyledBlogContainer >
    );
};

export default BlogEntry;