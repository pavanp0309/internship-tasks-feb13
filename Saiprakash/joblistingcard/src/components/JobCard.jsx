import React, { useState } from 'react';
import styles from './JobCard.module.css';

const JobCard = ({
  title,
  company,
  location,
  type,
  salaryRange,
  postedDate,
  isBookmarked,
  skillsRequired,
  isHotJob,
}) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const getTimeSincePosted = (date) => {
    const diff = Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 * 24));
    return `Posted ${diff} day${diff !== 1 ? 's' : ''} ago`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>{title}</h2>
          <p>{company} • {location}</p>
        </div>
        <button onClick={toggleBookmark} className={styles.bookmark}>
          {bookmarked ? '🔖' : '📑'}
        </button>
      </div>

      <span className={styles.badge}>{type}</span>

      {isHotJob && <span className={styles.hot}>🔥 Hot Job</span>}

      <p className={styles.salary}>{salaryRange}</p>

      <div className={styles.skills}>
        {skillsRequired.map((skill, idx) => (
          <span key={idx} className={styles.skill}>{skill}</span>
        ))}
      </div>

      <p className={styles.date}>{getTimeSincePosted(postedDate)}</p>
    </div>
  );
};

export default JobCard;
