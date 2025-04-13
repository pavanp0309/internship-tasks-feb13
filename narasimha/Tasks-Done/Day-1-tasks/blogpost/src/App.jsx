import React from 'react'
import PostCard1 from './components/PostCard1'
import PostCard2 from './components/PostCard2'
import PostCard3 from './components/PostCard3'
import styles from './components//PostCard.module.css'


const App = () => {
  return (
    <div>
      <div className={styles.head_parent}>
        <h1 className={styles.heading}>Latest Blog Posts</h1>
      </div>
      <div className={styles.app}>
        <PostCard1 />
        <PostCard2 />
        <PostCard3 />
      </div>
    </div>
  )
}

export default App
