import React from "react";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  const {
    thumbnail,
    title,
    instructor,
    duration,
    level,
    rating,
    price,
    discountPrice,
    tags,
    isEnrolled,
  } = course;

  return (
    <div className="course-card">
      <img className="thumbnail" src={thumbnail} alt={title} />
      <div className="course-info">
        <h3 className="title">{title}</h3>
        <p className="instructor">By {instructor}</p>
        <p className="duration-level">
          {duration} | {level}
        </p>
        <p className="rating">Rating: {rating} ⭐</p>
        <div className="price-section">
          {discountPrice ? (
            <>
              <span className="price discount-price">${discountPrice}</span>
              <span className="price original-price">${price}</span>
            </>
          ) : (
            <span className="price">${price}</span>
          )}
        </div>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>
        <div className="status-badge">
          {isEnrolled ? (
            <span className="enrolled-badge">Enrolled</span>
          ) : (
            <span className="new-course-badge">New Course</span>
          )}
        </div>
        <button className="action-button">
          {isEnrolled ? "Continue Course" : "Enroll Now"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
