import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchAnimeById } from '../api/animeApi';
import { useEffect, useState } from 'react';

const AnimeDetailsCard = () => {
  const { animeId } = useParams();
  const navigate = useNavigate();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnime = async () => {
      const selected = await fetchAnimeById(animeId);
      setAnime(selected);
      setLoading(false);
    };
  
    loadAnime();
  }, [animeId]);
  
  

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  if (!anime) {
    return <h2 className="text-danger text-center mt-5">Anime not found!</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border border-primary p-4">
        <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
  <img
    src={anime.image}
    className="img-fluid rounded"
    alt={anime.title}
    style={{ maxWidth: '100%', maxHeight: '400px'}}
  />
</div>


          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title text-primary">{anime.title}</h3>
              <p className="card-text"><strong>Status:</strong> {anime.status}</p>
              <p className="card-text"><strong>Episodes:</strong> {anime.episodes}</p>
              <p className="card-text"><strong>Genres:</strong> {anime.genres.join(', ')}</p>
              <p className="card-text"><strong>Synopsis:</strong> {anime.synopsis || 'No synopsis available.'}</p>

              <div className="d-flex gap-3 mt-4">
              {anime.link && (
                  <a href={anime.link} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                    Watch Now
                  </a>
                )}
              <button className="btn btn-primary" onClick={() => navigate('/api')}>Go Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailsCard;