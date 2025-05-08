import React, { useEffect, useState } from "react";

const EmpPostedJobs = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const employerName = localStorage.getItem("employerName");

  useEffect(() => {
    fetch("http://localhost:3000/activejobs")
      .then((res) => res.json())
      .then((data) => {
        const filteredJobs = data.filter(job => job.postedBy === employerName);
        setPostedJobs(filteredJobs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, [employerName]);

  if (loading) {
    return <div className="text-center mt-5">Loading posted jobs...</div>;
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/activejobs/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete the job");
        }
        // Remove from UI without re-fetch
        setPostedJobs(prevJobs => prevJobs.filter(job => job.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting job:", err);
      });
  };
  
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary fw-bold">Your Posted Jobs</h2>
  
      {postedJobs.length === 0 ? (
        <p className="text-center text-muted">No jobs posted yet.</p>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="w-100" style={{ maxWidth: "1000px" }}>
            {postedJobs.map((job) => {
              const truncatedContent = job.Content.join(" ").length > 100
                ? job.Content.join(" ").slice(0, 100) + "..."
                : job.Content.join(" ");
  
              return (
                <div className="card p-3 shadow-sm my-3" key={job.id}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="flex-grow-1 me-3">
                      <h5 className="mb-1">{job.Role}</h5>
                      <p className="text-muted mb-1">
                        <strong>{job.Name}</strong>
                      </p>
                    </div>
                    <img
                      src={job.img}
                      style={{ width: "60px", height: "60px", objectFit: "contain" }}
                      alt="company logo"
                    />
                  </div>
  
                  <div className="d-flex align-items-center text-muted my-2">
                    <i className="bi bi-briefcase me-2"></i> {job.Exp?.From}-{job.Exp?.To} Yrs &nbsp; | &nbsp;
                    <i className="bi bi-cash me-2"></i> {job.Salary} &nbsp; | &nbsp;
                    <i className="bi bi-geo-alt me-2"></i> {job.Location}
                  </div>
  
                  <p className="text-muted">📄 {truncatedContent}</p>
  
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-wrap text-primary small">
                      {job.Skills.map((skill, index) => (
                        <span key={index} className="me-2">
                          {skill} {index !== job.Skills.length - 1 && <>&nbsp;·&nbsp;&nbsp;</>}
                        </span>
                      ))}
                    </div>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(job.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
  
  
};

export default EmpPostedJobs;
