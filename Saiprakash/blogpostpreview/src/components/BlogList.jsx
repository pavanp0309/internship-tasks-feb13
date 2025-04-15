// BlogList.js
import React from 'react';
import styles from './BlogList.module.css';

const BlogList = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.map((post, index) => (
        <div key={index} className={styles.card}>
          <img src={post.thumbnail} alt={post.title} className={styles.thumbnail} />
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.snippet}>{post.snippet}</p>
          <div className={styles.details}>
            <span className={styles.author}>{post.author}</span>
            <div className={styles.tags}>
              {post.tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
          <button className={styles.readMore}>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
