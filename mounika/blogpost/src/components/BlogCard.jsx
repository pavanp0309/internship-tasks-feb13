import React from 'react'
import styles from "./Blogcard.module.css"

const BlogCard = () => {
  return (
    <div>
      <h1 className={styles.heading}>Travelling Blogs</h1>
      <div className={styles.parent}>
        {/* Card-1 */}
        <div className={styles.container}>
          <div className="card">
            <img src="https://wallpapercave.com/wp/wp3475630.jpg" alt="ocean" className={styles.thumbnail} />
            <ul className={styles.tags}>
              <li>OceanVibes</li>
              <li>BeachLife</li>
              <li>SandyToes</li>
            </ul>
            <h2 className={styles.title}>Lost in the rhythm of the ocean</h2>
            <h2 className={styles.author}>Ibn Battuta</h2>
            <p className={styles.description}>
              Endless blue where dreams drift and time slows down. 
              The ocean speaks in waves, calm or wild, always free.
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
        {/* Card-2 */}
        <div className={styles.container}>
          <div className="card">
            <img src="https://tse2.mm.bing.net/th?id=OIP.H--OhGk8zOM4dXKe-eyBQAHaEo&pid=Api&P=0&h=180" alt="mountains" className={styles.thumbnail} />
            <ul className={styles.tags}>
              <li>Summit</li>
              <li>Altitude</li>
              <li>Climb</li>
            </ul>
            <h2 className={styles.title}>Climb high, breathe deep, live free</h2>
            <h2 className={styles.author}>Marco Polo</h2>
            <p className={styles.description}>
              Silent giants that touch the sky and test your soul. 
              In every climb, you find a new version of yourself.
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
        {/* Card-3 */}
        <div className={styles.container}>
          <div className="card">
            <img src="https://tse2.mm.bing.net/th?id=OIP.4lD5qrGRrJgRSSP8S7ItpwHaEK&pid=Api&P=0&h=180" alt="forest" className={styles.thumbnail} />
            <ul className={styles.tags}>
              <li>Wild</li>
              <li>Green</li>
              <li>Trees</li>
            </ul>
            <h2 className={styles.title}>Among the trees, peace grows quietly</h2>
            <h2 className={styles.author}>Freya Stark</h2>
            <p className={styles.description}>
              A green symphony of life where peace breathes deep. 
              Wander through the woods and let nature rest you.
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
