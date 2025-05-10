import { useEffect, useState } from 'react';
import { fetchAnimeData } from '../api/animeApi';
import { recipesData } from '../api/recipesApi'; // import dummy data
import AnimeCard from '../components/AnimeCard';
import RecipesCard from '../components/RecipesCard';
import SearchBar from '../components/SearchBar';

const Api = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isApiFailed, setIsApiFailed] = useState(false); // track fallback usage

  const loadAnime = async (term = '') => {
    setIsLoading(true);
    try {
      const data = await fetchAnimeData(term);

      // Check if API returned usable data
      if (!data || data.length === 0) {
        throw new Error('API failed or empty');
      }

      setAnimeList(data);
      setIsApiFailed(false);
    } catch (error) {
      console.warn('Falling back to dummy data:', error.message);
      setAnimeList(recipesData.recipes); // fallback
      setIsApiFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAnime(); // Load top anime on first render
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    loadAnime(term);
  };

  return (
    <div className="container my-4">
      {!isApiFailed && (
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />
      )}

      <h2 className="text-center mb-4">{isApiFailed ? '⚠️ Live API failed, using Dummy Data.' : 'Anime List'}</h2>

      {isLoading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row gy-3">
          {animeList.length > 0 ? (
            animeList.map((item) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={isApiFailed ? item.id : item._id}>
                {isApiFailed ? (
                  <RecipesCard recipe={item} />
                ) : (
                  <AnimeCard anime={item} />
                )}
              </div>
            ))
          ) : (
            <h3 className="text-danger text-center">No data found</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Api;
