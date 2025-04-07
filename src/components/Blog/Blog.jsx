import React from "react";
import Hero from "../layout/Hero";
import { Link } from 'react-router-dom';
import {
    StyledBlogContainer
} from "./Blog.styled";
import FadeIn from "../common/FadeIn";
import styles from './Blog.module.css';

const Blog = ({ users }) => {
    return (
        <StyledBlogContainer>
            <Hero
                backgroundImage="/assets/blog-hero-bg.png"
                title="THE BLOG"
                subtitle="STAY INFORMED. GET INSPIRED. DISCOVER THE LATEST 
                        IT INNOVATION AND TEAMWORK. WELCOME TO THE BUZZ
                        FROM PEARS."
                fullHeight={false}
            />

            {users.map((user) => (
                <div className={styles.user} key={user.userId}>
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
                                {user.posts.map((post) => (
                                    <div className={styles.card} key={post.id}>
                                        <div >
                                            <img
                                                src={post.image}
                                                className={styles.card__image}
                                                alt="card"
                                            />
                                        </div>
                                        <div className={styles.card__text}>
                                            <h2 className={styles.card__h2}>{post.title}</h2>
                                            <p className={styles.card__p}>{post.content}</p>
                                        </div>
                                        <div className={styles.card__link}>
                                            <Link to={`/blogs/${user.userId}/${post.id}`}>Read Post</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            ))}
        </StyledBlogContainer >
    );
};

export default Blog;