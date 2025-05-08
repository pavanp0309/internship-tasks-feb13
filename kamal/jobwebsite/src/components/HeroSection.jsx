import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
      const navigate = useNavigate();
    
  return (
    <div className="container-fluid min-vh-100 bg-info-subtle d-flex align-items-center py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Side Content */}
      <div className="col-md-6 mb-5 mb-md-0">
        <h1 className="fw-bold display-3 lh-sm mb-4">
          Get your dream<br />
          job fast and build<br />
          your <span className="text-primary">career</span>
        </h1>

        <p className="mt-4 mb-5 fs-5 text-muted">
          Our collection will help your home look better and we provide the best product for you.
          <br />
          <strong>Our Product Features.</strong>
        </p>
       
        <div className="d-flex gap-4">
  <button
    className="btn btn-primary px-5 py-3 fw-bold d-flex align-items-center gap-2"
    onClick={() => navigate("/findjob")}
  >
    Search Jobs <i className="bi bi-box-arrow-up-right fs-5"></i>
  </button>

  <button
    className="btn btn-outline-secondary px-5 py-3 fw-bold d-flex align-items-center gap-2"
    onClick={() => navigate("/findjob")}
    style={{ color: "black" }}
  >
    How to Apply <i className="bi bi-play-circle-fill fs-5"></i>
  </button>
</div>
      </div>

      {/* Right Side Image */}
      <div className="col-md-6 text-center">
        <img
          src="src/assets/herohomepage.png"
          alt="Hero Banner"
          className="img-fluid rounded"
          style={{ maxHeight: "80vh", objectFit: "contain" }}
        />
      </div>
    </div>
  </div>
</div>

  )
}

export default HeroSection
