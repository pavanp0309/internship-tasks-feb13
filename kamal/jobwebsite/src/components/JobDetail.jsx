import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaStar,
  FaBriefcase,
  FaMoneyBill,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const res = await fetch(`http://localhost:3000/activejobs`);
        if (!res.ok) throw new Error("Failed to fetch job list");
        const data = await res.json();
        const selectedJob = data.find((item) => item.id === id);
        // parseInt converts string "3" to number 3
        if (!selectedJob) throw new Error("Job not found");
        setJob(selectedJob);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchJobDetail();
  }, [id]);

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!job) return <div className="text-center mt-5">Loading job details...</div>;

  return (
    <div className="container py-4">
      <div className="card shadow-lg border-0 rounded-4 p-4 position-relative">
      <div className="d-flex justify-content-between align-items-start mb-4">
  <div className="d-flex align-items-center">
    <img
      src={job.img}
      alt={job.Name}
      className="me-3"
      style={{ width: "70px", height: "70px", borderRadius: "10px" }}
    />
    <div>
      <h3 className="mb-0">{job.Role}</h3>
      <p className="text-muted mb-1">{job.Name}</p>
      <div className="d-flex align-items-center text-warning">
        <FaStar className="me-1" />
        <strong>{job.Rating}</strong>
        <span className="text-muted ms-2">({job.Reviews} reviews)</span>
      </div>
    </div>
  </div>
  <div className="d-flex gap-2">
    <button
      className="btn btn-secondary px-3 py-2 rounded-pill fw-bold"
      onClick={() => navigate("/findjob")}
    >
      Back
    </button>
    <button className="btn btn-success px-3 py-2 rounded-pill fw-bold">
      Apply Now
    </button>
  </div>
</div>


        <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
          <div>
            <p className="mb-2">
              <FaMapMarkerAlt className="me-2 text-primary" />
              <strong>Location:</strong> {job.Location}
            </p>
            <p className="mb-2">
              <FaBriefcase className="me-2 text-success" />
              <strong>Experience:</strong> {job.Exp.From} - {job.Exp.To} years
            </p>
            <p className="mb-2">
              <FaMoneyBill className="me-2 text-info" />
              <strong>Salary:</strong> {job.Salary}
            </p>
          </div>
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-primary">Job Description</h5>
          <ul className="text-muted ps-3">
            {job.Content.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="text-primary">Responsibilities</h5>
          <p className="text-muted">{job.Responsibilities}</p>
        </div>

        <div className="mb-4">
          <h5 className="text-primary">Qualifications</h5>
          <p className="text-muted">{job.Qualifications}</p>
        </div>

        <div className="mb-4">
          <h5 className="text-primary">Skills</h5>
          {job.Skills.map((skill, index) => (
            <span
              key={index}
              className="badge bg-secondary me-2 mb-2"
              style={{ fontSize: "0.9rem" }}
            >
              <FaCheckCircle className="me-1 mb-1" />
              {skill}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <h5 className="text-primary">About the Company</h5>
          <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
            {job.AboutCompany}
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-primary">Our Services Include</h5>
          <ul className="text-muted ps-3">
            {job.OurServicesInclude?.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="text-primary">Company Info</h5>
          <p className="text-muted">
            <FaBuilding className="me-2" />
            {job.CompanyInfo?.Address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
