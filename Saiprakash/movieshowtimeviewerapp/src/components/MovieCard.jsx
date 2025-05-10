import React from "react";
import styles from "./MovieCard.module.css";

const getTimeCategory = (time) => {
  const hour = parseInt(time);
  if (hour < 12) return styles.morning;
  if (hour < 17) return styles.afternoon;
  return styles.evening;
};

const MovieCard = ({ movie }) => {
  const isNowPlaying = movie.showtimes?.some((time) => time === "10:30 AM"); // dummy logic

  return (
    <div className={styles.card}>
      <h3>{movie.title}</h3>
      {movie.isPremiere && <span className={styles.premiere}>Premiere Only</span>}
      {movie.isFree && <span className={styles.free}>🎁 Free Show</span>}
      {movie.isFull && <span className={styles.full}>🔒 House Full</span>}
      {isNowPlaying && <span className={styles.now}>🔥 Now Playing</span>}

      <p><strong>Theater:</strong> {movie.theater}</p>
      <p><strong>Language:</strong> {movie.language} | <strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Rating:</strong> {"⭐".repeat(movie.rating)}</p>

      <div className={styles.showtimes}>
        {movie.showtimes?.length > 0 ? (
          movie.showtimes.map((time, index) => (
            <button
              key={index}
              disabled={movie.isFull}
              className={`${styles.pill} ${getTimeCategory(time)}`}
            >
              {time}
            </button>
          ))
        ) : (
          <p>No shows available today</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;