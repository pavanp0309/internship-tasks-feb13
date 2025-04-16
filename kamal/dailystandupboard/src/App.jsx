import React from 'react'
import data from './data/data'
import DailyStandupBoard from './components/DailyStandupBoard'

const App = () => {
  const teams = ["Frontend", "Backend"]; // static teams
  return (
    <div className="container mt-4">
      <h2>Daily Standup Board</h2>
      {teams.map((team) => {
        const members = data.filter((member) => member.team === team);

        return (
          <div key={team} className="mb-4">
            <h4>{team} Team</h4>
            {members.map((member, index) => (
              <DailyStandupBoard
                key={index}
                name={member.name}
                yesterday={member.yesterday}
                today={member.today}
                blockers={member.blockers}
              >
                {/* Optional footer or tag */}
                <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                  Thanks for updating, {member.name.split(" ")[0]}!
                </div>
              </DailyStandupBoard>
            ))}
          </div>
        );
      })}
    </div>
  )
}

export default App
