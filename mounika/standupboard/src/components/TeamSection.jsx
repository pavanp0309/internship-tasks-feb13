import React from "react";
import MemberCard from "./MemberCard";
import LayoutBox from "./LayoutBox";

const TeamSection = ({ team, members }) => {
  const avgTaskCount = (
    members.reduce((sum, m) => {
      let count = 0;
      if (m.yesterday) count++;
      if (m.today) count++;
      if (m.blockers && m.blockers.trim() !== "") count++;
      return sum + count;
    }, 0) / members.length
  ).toFixed(1);

  return (
    <div className="mb-5">
      <h3 className="text-primary">{team} Team</h3>
      <p className="text-muted">Avg Task Count: {avgTaskCount}</p>
      <LayoutBox>
        <div className="row">
          {members.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </LayoutBox>
    </div>
  );
};

export default TeamSection;
