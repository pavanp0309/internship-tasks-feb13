// PropertyListingCard.jsx
import React from "react";

const PropertyListingCard = ({
  image,
  title,
  location,
  price,
  area,
  bedrooms,
  bathrooms,
  amenities,
  isVerified,
  isAvailable
}) => {
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden" style={{ width: "20rem" }}>
      {/* Image */}
      <img
        src={image}
        alt="Property"
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        {/* Title and Location */}
        <h5 className="card-title mb-1">{title}</h5>
        <p className="text-muted small mb-2">{location}</p>

        {/* Tags */}
        <div className="mb-2">
          {isVerified && <span className="badge bg-success me-2">✅ Verified</span>}
          <span className={`badge ${isAvailable ? "bg-primary" : "bg-danger"}`}>
            {isAvailable ? "🏠 Available" : "⛔ Not Available"}
          </span>
        </div>

        {/* Price & Area */}
        <div className="d-flex justify-content-between mb-2 text-muted small">
          <span><i className="bi bi-currency-dollar me-1"></i>{price}</span>
          <span><i className="bi bi-aspect-ratio me-1"></i>{area}</span>
        </div>

        {/* Beds & Baths */}
        <div className="d-flex justify-content-between mb-2 text-muted small">
          <span><i className="bi bi-house-door me-1"></i>{bedrooms} Beds</span>
          <span><i className="bi bi-droplet-half me-1"></i>{bathrooms} Baths</span>
        </div>

        {/* Amenities */}
        <div className="mb-3">
          {amenities.includes("Parking") && <span className="badge bg-secondary me-2 mb-1"><i className="bi bi-car-front-fill me-1"></i>Parking</span>}
          {amenities.includes("Pool") && <span className="badge bg-secondary me-2 mb-1"><i className="bi bi-water me-1"></i>Pool</span>}
          {amenities.includes("Gym") && (<span className="badge bg-secondary me-2 mb-1"><i className="bi bi-activity me-1"></i>Gym</span>
)}
        </div>

        {/* Button */}
        <button className="btn btn-outline-primary w-100 mt-auto" disabled={!isAvailable}>
          Contact Agent
        </button>
      </div>
    </div>
  );
};

export default PropertyListingCard;
