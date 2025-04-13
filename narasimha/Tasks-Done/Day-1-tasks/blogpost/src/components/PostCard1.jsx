import React from 'react'
import styles from './PostCard.module.css'

const PostCard1 = () => {
    return (

        <div className={styles.card}>
            <div className={styles.innerCard}>
                <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PIqzX1p7ueIQSi5p29gEtEf165sYb_DhWw&s" alt="image" />
                <div style={{display:'flex'}}>
                    <h3 className={styles.blogTitle}>Living</h3>
                </div>
                <h3 className={styles.desc}>How to Use Facial Expressions in Pubic Speaking</h3>
                <h5 className={styles.desc}>- By Narasimha Reddy</h5>
                <div className={styles.parent}>
                    <a className={styles.link} href='#'>Living </a>
                    <a className={styles.link} href='#'> Blog  </a>
                    <a className={styles.link} href='#'> Life </a>
                </div>
            </div>
        </div>
    )
}

export default PostCard1
