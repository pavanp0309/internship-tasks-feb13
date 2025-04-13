import React from 'react'
import styles from './PostCard.module.css'

const PostCard2 = () => {
    return (
        <div className={styles.card}>
            <div className={styles.innerCard}>
                <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTEps1oADznVIUjDeSByXwvN_LpRZAPb7KA&s" alt="image" />
                <div style={{ display: 'flex' }}>
                    <h3 className={styles.blogTitle}>Relationship</h3>
                </div>
                <h3 className={styles.desc}>Easy way to Provide Emotional Support to Your Partner</h3>
                <h5 className={styles.desc}>- By Narasimha Reddy</h5>
                <div className={styles.parent}>
                    <a className={styles.link} href='#'>Relationship </a>
                    <a className={styles.link} href='#'> Blog  </a>
                    <a className={styles.link} href='#'> Partner </a>
                </div>
            </div>
        </div>
    )
}

export default PostCard2
