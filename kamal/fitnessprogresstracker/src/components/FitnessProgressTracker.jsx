import React from "react";

const FitnessProgressTracker = ({ metricType, goal, achieved, unit, last7Days }) => {
  const progressPercentage = (achieved / goal) * 100;

  // Determine the status message
  const isCrushed = progressPercentage >= 100;
  let progressMessage = "🔥 Keep going!";
if (isCrushed) {
  progressMessage = "🚀 You crushed it!";
} else if (progressPercentage > 50) {
  progressMessage = "🎯 Goal Met";
}

// Use same condition for badge color
const badgeColor = isCrushed? "bg-success"
  : progressPercentage < 50? "bg-danger": "bg-warning";


  // Check if performance is low and set color based on progress
  const progressColor = progressPercentage >= 50 ? "bg-success" : "bg-warning";

  // Calculate the average of the last 7 days data
  const averageLast7Days = last7Days.reduce((acc, val) => acc + val, 0) / last7Days.length;

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">{metricType}</h5>
        <div className="d-flex justify-content-between">
          <p className="card-text">
            {achieved} / {goal} {unit}
          </p>
          <span className={`badge ${badgeColor}`}>
  {progressMessage}
</span>
        </div>

        {/* Progress Bar */}
        <div className="progress my-3">
          <div
            className={`progress-bar ${progressColor}`}
            style={{ width: `${progressPercentage}%` }}
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        {/* Last 7 days summary */}
        <h6>Last 7 Days</h6>
        <div className="d-flex justify-content-between">
          {last7Days.map((value, index) => (
            <span key={index} className="badge bg-secondary">
              {value} {unit}
            </span>
          ))}
        </div>
        <div className="mt-3">
          <strong>Average (Last 7 Days):</strong> {averageLast7Days.toFixed(2)} {unit}
        </div>
      </div>
    </div>
  );
};

export default FitnessProgressTracker;
