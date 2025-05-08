import React from "react";
import { FaArrowRight } from "react-icons/fa";  // Using react-icons for arrow
import { Link } from "react-router-dom";

const CategorySliderCard = ({ name, icon }) => {
  return (
    <Link to="/findjob" className="text-decoration-none">
    <div className="card d-flex flex-row align-items-center p-3 mx-3" style={{ minWidth: "200px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", cursor: "pointer" }}>
      <span className="fs-3 me-3">{icon}</span>
      <h6 className="flex-grow-1 m-0">{name}</h6>
      <FaArrowRight className="text-primary" />
    </div>
    </Link>
  );
};

export default CategorySliderCard;
