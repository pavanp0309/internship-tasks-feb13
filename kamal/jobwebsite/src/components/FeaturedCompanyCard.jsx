import React from "react";
import { Link } from "react-router-dom";

const FeaturedCompanyCard = ({ company }) => {
  return (
    <div className="card border border-primary-subtle shadow-sm rounded-4 p-3 h-100 bg-white">
      <div className="text-center mb-3">
        <img
          src={company.logo}
          alt={company.name}
          className="rounded"
          style={{ width: 80, height: 80 }}
        />
      </div>
      <h5 className="text-center fw-bold">{company.name}</h5>
      <p className="text-center text-muted small mb-2">
        ⭐ {company.rating} | {company.reviews} reviews
      </p>
      <p className="text-muted small text-center mb-3" style={{ minHeight: "48px" }}>
        {company.description}
      </p>
      <div className="text-center">
            <Link 
            to="/findjob"  // Specify the target page URL here
            className="btn btn-outline-primary btn-sm"
          >
            View Jobs
            </Link>
      </div>
    </div>
  );
};

export default FeaturedCompanyCard;
