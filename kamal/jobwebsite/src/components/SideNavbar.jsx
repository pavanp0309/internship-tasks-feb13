import React from "react";

const SideNavbar = () => {
  return (
    <div
      className="sidebar p-4"
      style={{
        width: "280px",
        background: "#f8f9fa",
        height: "100vh",
        position: "sticky",
        top: "0",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h4 className="mb-4" style={{ fontWeight: "bold", color: "#007bff" }}>Filters</h4>

      {/* Location Filter */}
      <div className="mb-4">
        <h5 className="mb-2" style={{ fontWeight: "500", color: "#495057" }}>Location</h5>
        <select className="form-select" style={{ borderRadius: "8px", borderColor: "#ccc", boxShadow: "none" }}>
          <option value="">Select Location</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Pune">Pune</option>
        </select>
      </div>

      {/* Role Filter */}
      <div className="mb-4">
        <h5 className="mb-2" style={{ fontWeight: "500", color: "#495057" }}>Role</h5>
        <select className="form-select" style={{ borderRadius: "8px", borderColor: "#ccc", boxShadow: "none" }}>
          <option value="">Select Role</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Product Manager">Product Manager</option>
          <option value="UX/UI Designer">UX/UI Designer</option>
          <option value="Business Analyst">Business Analyst</option>
        </select>
      </div>

      {/* Experience Filter */}
      <div className="mb-4">
        <h5 className="mb-2" style={{ fontWeight: "500", color: "#495057" }}>Experience</h5>
        <select className="form-select" style={{ borderRadius: "8px", borderColor: "#ccc", boxShadow: "none" }}>
          <option value="">Select Experience</option>
          <option value="0-2">0-2 years</option>
          <option value="2-5">2-5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>

      {/* Company Filter */}
      <div className="mb-4">
        <h5 className="mb-2" style={{ fontWeight: "500", color: "#495057" }}>Company</h5>
        <select className="form-select" style={{ borderRadius: "8px", borderColor: "#ccc", boxShadow: "none" }}>
          <option value="">Select Company</option>
          <option value="Google">Google</option>
          <option value="Amazon">Amazon</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Facebook">Facebook</option>
        </select>
      </div>

      {/* Salary Filter */}
      <div className="mb-4">
        <h5 className="mb-2" style={{ fontWeight: "500", color: "#495057" }}>Salary</h5>
        <select className="form-select" style={{ borderRadius: "8px", borderColor: "#ccc", boxShadow: "none" }}>
          <option value="">Select Salary</option>
          <option value="0-5">0-5 LPA</option>
          <option value="5-10">5-10 LPA</option>
          <option value="10+">10+ LPA</option>
        </select>
      </div>

      {/* Employment Type Filter */}
      <div className="mb-4">
        <h5 className="mb-2" style={{ fontWeight: "500", color: "#495057" }}>Employment Type</h5>
        <select className="form-select" style={{ borderRadius: "8px", borderColor: "#ccc", boxShadow: "none" }}>
          <option value="">Select Employment Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      {/* Reset Button */}
      <div>
        <button
          className="btn btn-outline-primary w-100"
          style={{ borderRadius: "8px" }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;
