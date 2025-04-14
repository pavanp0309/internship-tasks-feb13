import React from 'react';

function CourseCard({
  title,
  instructor,
  duration,
  level,
  isEnrolled,
  rating,
  tags,
  thumbnailUrl,
  discountPrice,
  originalPrice,
}) {
  return (
    <div className="card h-100">
      <img src={thumbnailUrl} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Instructor: {instructor}</p>
        <p className="card-text">Duration: {duration} | Level: {level}</p>
        <p className="card-text">⭐ Rating: {rating}</p>

        <div>
          {discountPrice ? (
            <>
              <strong>₹{discountPrice}</strong>{' '}
              <span className="text-muted text-decoration-line-through">₹{originalPrice}</span>
            </>
          ) : (
            <strong>₹{originalPrice}</strong>
          )}
        </div>

        <div className="mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-primary me-1">{tag}</span>
          ))}
        </div>

        <div className="mt-2">
          {isEnrolled ? (
            <span className="badge bg-success">Enrolled</span>
          ) : (
            <span className="badge bg-warning text-dark">New Course</span>
          )}
        </div>

        <button className={`btn mt-3 ${isEnrolled ? 'btn-outline-success' : 'btn-primary'}`}>
          {isEnrolled ? 'Continue Course' : 'Enroll Now'}
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
