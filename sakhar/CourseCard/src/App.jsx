/**
 * App.jsx
 * 
 * Main application component that renders the welcome message and a list of course cards.
 * It imports course data and the CourseCard component to display individual courses.
 */

import React, { Component } from 'react'
import courses from './CourseData'
import CourseCard from './CourseCard'

class App extends Component {
  render() {
    return (
      <div>
        {/* Welcome message displayed at the top center */}
        <h1 style={{textAlign:'center'}}>Welcome to the Ed tech</h1>

        {/* Container for the list of course cards */}
        <div className="course-list">
          {/* Rendering CourseCard components for each course */}
          <CourseCard course={courses[0]} />
          <CourseCard course={courses[1]} />
          <CourseCard course={courses[2]} />
          <CourseCard course={courses[3]} />
        </div>
      </div>
    )
  }
}

export default App
