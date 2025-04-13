import React from 'react'
import styles from './PostCard.module.css'

const PostCard3 = () => {
    return (
        <div className={styles.card}>
            <div className={styles.innerCard}>
                <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZsY3ShE81lwgXDNiQPMfSP0vU85TpWykkVA&s" alt="image" />
                <div style={{ display: 'flex' }}>
                    <h3 className={styles.blogTitle}>Career</h3>
                </div>
                <h3 className={styles.desc}>The State of Remote Work: Statistics,Benefits and Trends</h3>
                <h5 className={styles.desc}>- By Narasimha Reddy</h5>
                <div className={styles.parent}>
                    <a className={styles.link} href='#'>Career </a>
                    <a className={styles.link} href='#'> Blog  </a>
                    <a className={styles.link} href='#'> Success </a>
                </div>
            </div>
        </div>
    )
}

export default PostCard3
