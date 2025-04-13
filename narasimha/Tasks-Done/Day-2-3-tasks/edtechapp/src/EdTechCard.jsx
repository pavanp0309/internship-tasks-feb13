import React from 'react'

const EdTechCard = (props) => {
    const { title, image, instructor, duration, level, rating, price, discountPrice, tags, isEnrolled } = props.ele
    return (
        <div>
            {/** card start */}
            <div className="card  shadow bg-body-tertiary " style={{minHeight:'500px' }}>
                <img src={image} className="card-img-top position-relative" />
                <h5 className='rounded pill my-2 position-absolute mx-2 ' style={{ width: isEnrolled ? '100px':'130px', padding: isEnrolled ?  '2px 2px':'1px 10px', color: 'white', fontSize: '18px', fontWeight: 'bold', backgroundColor:isEnrolled ? 'green':'red' }} >{isEnrolled ? "Enrolled ✓" : "New Course"} </h5>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h6 className="card-text">Instructor: {instructor}</h6>
                    <h6 className='card-text'>{duration} • {level}</h6>
                    <p className='card-text'>{rating}</p>
                    <h4 className='card-text'>{price} <span style={{ textDecoration: 'line-through', fontSize: '18px', opacity: '0.5' }}>{discountPrice}</span></h4>
                    <p className='card-text'>{tags.map((e) => { return <span className='rounded pill mx-1' style={{ backgroundColor: 'orange', padding: '3px 10px', color: 'white', fontWeight: 'bold' }}>{e}</span> })}</p>
                    <button className='btn btn-primary'>{isEnrolled ? "Continue Course" : "Enroll Now"}</button>
                </div>
            </div>
        </div>
    )
}

export default EdTechCard
