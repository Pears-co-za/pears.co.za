import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
    StyledBlogEntryContainer,
} from "./BlogEntry.styled";
import FadeIn from "../common/FadeIn";
import styles from './BlogEntry.module.css';
import parse from 'html-react-parser';

const BlogEntry = ({ users }) => {
    const { userId, id } = useParams();

    function findPost(u, p) {
        const user = users.find(user => user.userId === +u);
        if (user) {
            return user.posts.find(post => post.id === +p) || null;
        }
        return null;
    }

    const post = findPost(userId, id);
    const user = users.find(user => user.userId === +userId);

    return (
        <StyledBlogEntryContainer>
            <div className={styles.blogEntry__wrapper}>
                <div className={styles.previous__page}>
                    <Link to={`/blog`}>Back To Previous Page</Link>
                </div>
                <div className={styles.blogEntry__container}>
                    <FadeIn delay={200}>
                        <div className={styles.center__content}>
                            <div className={styles.cards}>
                                {post ? (
                                    <div className={styles.card} key={post.id}>
                                        <div className={styles.card__image} >
                                            <img
                                                src={post.image}
                                                alt="user"
                                            />
                                        </div>
                                        <div className={styles.card__text}>
                                            <div className={styles.user__info}>
                                                <img
                                                    src={user.profilePicture}
                                                    className={styles.card__profile}
                                                    alt="user"
                                                />

                                                <div className={styles.card__metadata}>
                                                    <p className={styles.user__name}>
                                                        {user.firstName} {user.lastName}
                                                    </p>
                                                    <p className="post__eta">
                                                        {post.uploadDate} &bull; {post.timeToRead}
                                                    </p>
                                                </div>
                                            </div>
                                            <h2 className={styles.card__h2}>{post.title}</h2>
                                            <div className={styles.card__p}>
                                                {parse(post.content)}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <p>Post not found!</p>
                                )}
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <div className={styles.quote}>
                    <h1>
                        "A single bee may gather nectar, but only a hive can make honey. Teamwork turns effort into achievement."
                    </h1>
                </div>
            </div>
        </StyledBlogEntryContainer >
    );
};

export default BlogEntry;