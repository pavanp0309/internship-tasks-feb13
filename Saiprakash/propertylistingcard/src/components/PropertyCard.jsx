import React from 'react';
import styles from './PropertyCard.module.css';

const PropertyCard = ({
  title,
  location,
  price,
  area,
  bedrooms,
  bathrooms,
  amenities = [],
  isAvailable,
  imageUrl = "https://via.placeholder.com/300x200",
  isVerified,
  children,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <span className={isVerified ? styles.verified : styles.notVerified}>
            {isVerified ? "✅ Verified" : "❌ Not Verified"}
          </span>
        </div>

        <p className={styles.location}>{location}</p>
        <p><strong>₹{price}</strong> • {area} sqft</p>
        <p>{bedrooms} Bed • {bathrooms} Bath</p>

        <div className={styles.amenities}>
          {amenities.map((item, i) => (
            <span key={i} className={styles.amenity}>{item}</span>
          ))}
        </div>

        <div className={styles.availability}>
          {isAvailable ? "🏡 Available" : "⛔ Not Available"}
        </div>

        <button className={styles.button} disabled={!isAvailable}>
          Contact Agent
        </button>

        {children}
      </div>
    </div>
  );
};

export default PropertyCard;
