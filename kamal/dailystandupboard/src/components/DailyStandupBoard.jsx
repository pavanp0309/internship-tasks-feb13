import React from 'react'


const DailyStandupBoard = ({ name, yesterday, today, blockers, children }) => {
    const hasBlockers = blockers && blockers.trim() !== "";

  return (
    <div className={`card mb-3 p-3 ${hasBlockers ? "border-danger" : "border-success"}`}>
      <h5>{name}</h5>
      <p><strong>Yesterday:</strong> {yesterday}</p>
      <p><strong>Today:</strong> {today}</p>
      <p>
        <strong>Blockers:</strong>{" "}
        {hasBlockers ? (
          <span className="text-danger">❗ {blockers}</span>
        ) : (
          <span className="text-success">All clear ✅</span>
        )}
      </p>
      {children}
    </div>
  )
}

export default DailyStandupBoard
