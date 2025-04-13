import React, { useState } from 'react'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { formatDistanceToNow } from 'date-fns'

const JobCard = (props) => {

    const { title, location, type, company, skills, hot_badge, postedTime } = props.jobPost

    const [bookmark, setBookmark] = useState(false)


    const handleBookmark = () => {
        setBookmark(!bookmark)
    }

    // for colouring i used 
    const hotStyle = {
        color: 'red',
        backgroundColor: 'lightpink',
        padding: '4px 5px',
        borderRadius: '10px',
        margin: '10px 10px'

    }

    // for date formatting

    const timeAgo = formatDistanceToNow(new Date(postedTime), { addSuffix: true })

    return (
        <div className=" d-flex justify-content-center align-items-center">
            <div className="card shadow my-4 mx-5"  >
                <div className="card-head d-flex justify-content-between align-items-center ">
                    <h5 style={hot_badge ? hotStyle : {}}>{hot_badge ? '🔥 Hot Job' : ''}</h5>
                    <i className={bookmark ? "bi bi-bookmark-fill" : "bi bi-bookmark"} onClick={handleBookmark} style={{ cursor: 'pointer', fontSize: '30px', margin: '20px 20px' }}></i>
                </div>
                <div className="card-body">
                    <h1 className="card-title fw-bold" style={{ fontSize: '50px' }}>{title}</h1>
                    <p className="card-text fs-3" style={{ fontWeight: '' }}>{company}</p>
                    <p className='card-text fw-bold' style={{ fontSize: '20px' }}>{type}</p>
                    <p className="card-text"><i className="bi bi-geo-alt"></i> {location}</p>
                    <p className="card-text my-3"> {skills.map((ele) => <span className='mx-2' style={{ backgroundColor: 'lightblue', borderRadius: '5px', padding: '4px 7px', fontWeight: 'bold' }}>{ele}</span>)}</p>
                    <p className='card-text' style={{ opacity: '80%' }}>Posted {timeAgo}</p>

                    <button className="btn btn-primary w-100 my-2">Apply</button>
                </div>
            </div>
        </div>
    )
}

export default JobCard
