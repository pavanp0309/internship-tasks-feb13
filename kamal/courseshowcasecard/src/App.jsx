import React from 'react'
import CourseShowcaseCard from './components/courseshowcasecard'
import 'bootstrap-icons/font/bootstrap-icons.css';
import courses from './data/data';



const App = () => {
  return (
    <div className="container py-5">
<div className="text-center mb-5">
  <h2 className="fw-bold display-5 text-primary d-inline-block border-bottom pb-3">
    <i className="bi bi-stars me-2 text-warning"></i>
    Our Popular Courses
  </h2>
</div>

    <div className="row gy-4 justify-content-center">
      {courses.map((course) => (
        <div key={course.id} className="col-md-6 col-lg-4 d-flex">
          <CourseShowcaseCard
            title={course.title}
            instructor={course.instructor}
            duration={course.duration}
            level={course.level}
            isEnrolled={course.isEnrolled}
            rating={course.rating}
            tags={course.tags}
            thumbnailUrl={course.thumbnailUrl}
            discountPrice={course.discountPrice}
            originalPrice={course.originalPrice}
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default App
