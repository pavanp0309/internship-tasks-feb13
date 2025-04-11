import React from 'react'
import style from "./Blogcard.module.css"
const BlogCard = () => {
  return (
   
<div className={style.parent}>
    <div className="div1">
    <div className={style.card}>
    <img src="https://csscardgenerator.pages.dev/images/placeholder_300_200.png" alt="preview img"/>
    <div className={style.cardbody}>
        <h2 className={style.cardtitle}>Day Hike To Mirador Las Torres (By Bus Or Car)</h2>  
        <p className={style.cardtext}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis esse aliquid hic.</p>
        <button className='btn'>readmore</button>
    </div>
</div>
    </div>
    <div className="div2">
        {/* card-2  */}
        <div className={style.card}>
    <img src="https://csscardgenerator.pages.dev/images/placeholder_300_200.png" alt="preview img"/>
    <div className={style.cardbody}>
        <h2 className={style.cardtitle}>Day Hike To Mirador Las Torres (By Bus Or Car)</h2>  
        <p className={style.cardtext}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis esse aliquid hic.</p>
        <button className='btn'>readmore</button>
    </div>
</div>
    </div>
    <div className="div3">
    <div className={style.card}>
    <img src="https://csscardgenerator.pages.dev/images/placeholder_300_200.png" alt="preview img"/>
    <div className={style.cardbody}>
        <h2 className={style.cardtitle}>Day Hike To Mirador Las Torres (By Bus Or Car)</h2>  
        <p className={style.cardtext}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis esse aliquid hic.</p>
        <button className='btn'>readmore</button>
    </div>
</div>
    </div>
</div>
    
  )
}

export default BlogCard
