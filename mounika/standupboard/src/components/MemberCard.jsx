import React from "react";

const MemberCard = ({ member }) => {
  const hasBlockers = member.blockers && member.blockers.trim() !== "";

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{member.name}</h5>
        <p><strong>Yesterday:</strong> {member.yesterday}</p>
        <p><strong>Today:</strong> {member.today}</p>
        {hasBlockers ? (
          <div className="border border-danger p-2 rounded bg-light">
            <strong>Blockers ❗</strong><br />
            {member.blockers}
          </div>
        ) : (
          <div className="text-success">
            <strong>All clear ✅</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
