import React from 'react'
import FitnessProgressTracker from './components/FitnessProgressTracker'
import fitnessData from './data/data'

const App = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold text-success display-6 border-bottom pb-3">
        🏋️‍♂️ Fitness Progress Tracker
      </h2>
  
      {/* Mapping through exercise data */}
      <div className="row gy-4 justify-content-center">
        {fitnessData.exercise.map((metric, index) => (
          <div key={index} className="col-12"> {/* One card per row */}
            <FitnessProgressTracker
              metricType={metric.icon + " " + metric.type}
              goal={metric.goal}
              achieved={metric.achieved}
              unit={metric.unit}
              last7Days={[...Array(7)].map(
                () => Math.floor(Math.random() * metric.goal * 1.2)
              )}
            />
          </div>
        ))}
      </div>
  
      {/* Mapping through health data */}
      <div className="row gy-4 justify-content-center">
        {fitnessData.health.map((metric, index) => (
          <div key={index} className="col-12"> {/* One card per row */}
            <FitnessProgressTracker
              metricType={metric.icon + " " + metric.type}
              goal={metric.goal}
              achieved={metric.achieved}
              unit={metric.unit}
              last7Days={[...Array(7)].map(
                () => Math.floor(Math.random() * metric.goal * 1.2)
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
  
  
}

export default App
