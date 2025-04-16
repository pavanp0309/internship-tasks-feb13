import React from 'react'

const CourseShowcaseCard = (props) => {
    const {title,instructor,duration,level,isEnrolled,rating,tags,thumbnailUrl,discountPrice,originalPrice} = props

  return (
   <div>
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden" style={{ width: '20rem' }}>
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        className="card-img-top"
        alt="Course Thumbnail"
        style={{ height: '180px', objectFit: 'cover' }}
      />

      <div className="card-body d-flex flex-column">
        {/* Title, Instructor, Badge */}
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <h5 className="card-title mb-1">{title}</h5>
            <p className="text-muted small mb-0">by {instructor}</p>
          </div>
          <span className={`badge rounded-pill ${isEnrolled ? "bg-success" : "bg-warning text-dark"}`}>
            {isEnrolled ? "Enrolled" : "New Course"}
          </span>
        </div>

        {/* Duration & Level */}
        <div className="d-flex justify-content-between text-muted small mb-3">
          <span><i className="bi bi-clock me-1"></i>{duration}</span>
          <span><i className="bi bi-bar-chart me-1"></i>{level}</span>
        </div>

        {/* Rating */}
        <div className="mb-2">
          <span className="fw-semibold">{rating.toFixed(1)}</span>
          <span className="text-warning ms-1">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="bi bi-star-fill me-1"></i>
            ))}
          </span>
        </div>

        {/* Price Section */}
        <div className="mb-3">
          <span className="fw-bold text-primary me-2">${discountPrice}</span>
          <span className="text-decoration-line-through text-muted">${originalPrice}</span>
        </div>

        {/* Tags */}
        <div className="mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-secondary rounded-pill me-2 mb-1">{tag}</span>
          ))}
        </div>

        {/* Button */}
        <a href="#" className="btn btn-outline-primary w-100 mt-auto">
          {isEnrolled ? "Continue Course" : "Enroll Now"}
        </a>
      </div>
    </div>

   </div>
  )
}

export default CourseShowcaseCard
