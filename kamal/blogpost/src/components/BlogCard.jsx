import React from 'react'
import style from './Blogcard.module.css'

const BlogCard = () => {
  return (
    <div>
        <h1 className={style.main_heading}>Welcome to my Blog Post</h1>

        <div className={style.parent}>
            <div className={style.widthfordiv}>
                <img className={style.images} src="https://images.unsplash.com/photo-1600670942298-b10325b17dea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwYmxvZ2dlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <ul className={style.list}>
                    <li>Bucket List</li>
                    <li>Chile</li>
                    <li>Hiking</li>
                    <li>Lakes</li>
                </ul>
                <h2>Day Hike To Mirador Las Torres (By Bus Or Car)</h2>
                <p>One of the most iconic and amazing hikes in Chile is the Mirador Las Torres (‘viewpoint of the towers’), and it can be done as either a 1 day hike or as part of the W trek, which takes 4 to 5 days.</p>
                <button>Read More</button>
            </div>

            <div className={style.widthfordiv}>
            <img className={style.images} src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwYmxvZ2dlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <ul className={style.list}>
                    <li>Nature</li>
                    <li>Photography</li>
                    <li>Waterfalls</li>
                    <li>Exploration</li>
                </ul>
                <h2>Capturing the Magic of Hidden Falls in Patagonia</h2>
                <p>Experience untouched beauty as we explore lesser-known waterfalls deep in the Patagonian wilderness, perfect for photographers and adventurers alike.</p>
                <button>Read More</button>
            </div>

            <div className={style.widthfordiv}>
            <img className={style.images} src="https://images.unsplash.com/photo-1729457046390-0eb8571eb1d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRyYXZlbCUyMGJsb2dnZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
                <ul className={style.list}>
                    <li>Road Trip</li>
                    <li>Camping</li>
                    <li>Forests</li>
                    <li>Adventure</li>
                </ul>
                <h2>Top 5 Scenic Campsites for Your Next Road Trip</h2>
                <p>Discover handpicked camping spots that offer breathtaking views, peaceful vibes, and unforgettable memories under the stars across South America.</p>
                <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
