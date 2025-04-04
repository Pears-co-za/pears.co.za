import React from "react";
import { Link } from 'react-router-dom';
import {
    StyledBlogContainer
} from "./Blog.styled";
import FadeIn from "../common/FadeIn";
import styles from './Blog.module.css';

const Blog = ({ blogs }) => {
    return (
        <StyledBlogContainer>
            <div className={styles.user}>
                <FadeIn delay={200}>
                    <div className={styles.blogWrapper}>
                        <div className={styles.intro}>
                            <div >
                                <img
                                    src="./assets/Ellipse_2.png"
                                    className=""
                                    alt="user"
                                />
                            </div>
                            <div>
                                <h2>Beyond the Welcome Matt</h2>
                                <p>Please step inside</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe minus laboriosam cum modi ipsum expedita facere nam! Modi est consequuntur magni voluptates in.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={200}>
                    <div className={styles.center__content}>
                        <div className={styles.cards}>
                            {blogs.map((blog) => (
                                <div className={styles.card} key={blog.id}>
                                    <div >
                                        <img
                                            src={blog.image}
                                            className={styles.card__image}
                                            alt="card"
                                        />
                                    </div>
                                    <div className={styles.card__text}>
                                        <h2 className={styles.card__h2}>{blog.title}</h2>
                                        <p className={styles.card__p}>{blog.content}</p>
                                    </div>
                                    <div className={styles.card__link}>
                                        <Link to={`/blogs/${blog.id}`}>Read Post</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>

        </StyledBlogContainer >
    );
};

export default Blog;