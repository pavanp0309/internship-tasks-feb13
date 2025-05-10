import React from "react";
import { Link } from "react-router-dom";

const JobCard = (props) => {
    const {id,Role,Name,Rating,Reviews,img,From,To,Location,Content,Skills,Posted,Salary,PostedBy="NA"} = props

     // Limit content to first 100 characters (you can adjust this number)
  const truncatedContent = Content.length > 100 ? Content.slice(0, 100) + "..." : Content;
console.log('salary',Salary)
  return (
    <div className="col-12 col-md-12 col-lg-9">
      <Link to={`/findjob/${id}`} className="text-decoration-none text-dark">
    <div className="card p-3 shadow-sm my-2">
    <div className="d-flex justify-content-between align-items-start">
  <div className="flex-grow-1 me-3">
    <h5 className="mb-1">{Role}</h5>
    <p className="text-muted mb-1">
      <strong>{Name}</strong> ⭐ {Rating} | {Reviews} Reviews
    </p>
  </div>
  <img
    src={img}
    style={{ width: "60px", height: "60px", objectFit: "contain" }}
    alt="company logo"
  />
</div>



      <div className="d-flex align-items-center text-muted my-2">
        <i className="bi bi-briefcase me-2"></i> {From}-{To} Yrs &nbsp; | &nbsp;
        <i className="bi bi-cash me-2"></i> {Salary} &nbsp; | &nbsp;
        <i className="bi bi-geo-alt me-2"></i> {Location}
      </div>

      <p className="text-muted">
        📄 {truncatedContent}
      </p>

      <div className="d-flex flex-wrap text-primary small">
      {Skills.map((skill, index) => (
    <span key={index} className="me-2">
      {skill} {index !== Skills.length - 1 && <>&nbsp;·&nbsp;&nbsp;</>}
    </span>
  ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <small className="text-muted">{Posted} Days Ago</small>
        <i className="bi bi-bookmark"></i>
      </div>
    </div>
    </Link>
    </div>
  );
};

export default JobCard;
