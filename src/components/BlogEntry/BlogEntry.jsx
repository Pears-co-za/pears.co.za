import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
    StyledBlogEntryContainer,
} from "./BlogEntry.styled";
import FadeIn from "../common/FadeIn";
import styles from './BlogEntry.module.css';

const BlogEntry = ({ blogs }) => {
    const { id } = useParams();
    console.log(id);

    const blog = blogs[0].posts.find((b) => b.id === parseInt(id));
    const user = blogs[0];

    return (
        <StyledBlogEntryContainer>
            <div className={styles.previous__page}>
                <Link to={`/blog`}>Back To Previous Page</Link>
            </div>

            <div className={styles.blogEntry__container}>
                <FadeIn delay={200}>
                    <div className={styles.center__content}>
                        <div className={styles.cards}>
                            {blog ? (
                                <div className={styles.card} key={blog.id}>
                                    <div >
                                        <img
                                            src={blog.image}
                                            className={styles.card__image}
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
                                            <p className={styles.user__name}>
                                                {user.firstName} {user.lastName}
                                            </p>
                                            <p className="post__eta">
                                                {blog.uploadDate} &bull; {blog.timeToRead}
                                            </p>
                                        </div>
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
            </div>

            <div className={styles.quote}>
                <h1>
                    "A single bee may gather nectar, but only a hive can make honey. Teamwork turns effort into achievement."
                </h1>
            </div>
        </StyledBlogEntryContainer >
    );
};

export default BlogEntry;