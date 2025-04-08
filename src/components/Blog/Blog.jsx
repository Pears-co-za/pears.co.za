import React, { useEffect } from "react";
import Hero from "../layout/Hero";
import { Link } from 'react-router-dom';
import FadeIn from "../common/FadeIn";
import styles from './Blog.module.css';

const Blog = ({ users }) => {

        useEffect(() => {
            window.scrollTo(0,0)
        }, []);
    return (
        <>
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
        </ >
    );
};

export default Blog;