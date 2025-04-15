import React from "react";
import { teamData } from "./data";
import TeamSection from "./components/TeamSection";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  return (
    <div className="app-bg min-vh-100 py-4">
      <div className="container">
        <h1 className="mb-4 text-center text-danger">Daily Standup Board</h1>
        {teamData.map((teamObj, idx) => (
          <TeamSection
            key={idx}
            team={teamObj.team}
            members={teamObj.members}
          />
        ))}
      </div>
    </div>
  );
};

export default App;