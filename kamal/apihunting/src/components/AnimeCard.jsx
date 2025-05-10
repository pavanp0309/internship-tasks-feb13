import React from 'react';
import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
  const { _id, image, title, episodes, status, genres } = anime;

  return (
    <div className="card shadow-sm h-100 border border-primary border-1 rounded-3">
      <img
        src={image}
        className="card-img-top rounded-top-2"
        alt={title}
        style={{ height: '300px' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary text-truncate">{title}</h5>
        <p className="card-text mb-1"><strong>Episodes:</strong> {episodes}</p>
        <p className="card-text mb-1"><strong>Status:</strong> {status}</p>
        <p className="card-text mb-3" style={{ fontSize: '0.95rem' }}><strong>Genres:</strong> {genres.join(', ')}</p>
        <div className="mt-auto">
          <Link to={`/api/${_id}`} className="btn btn-primary w-100">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
