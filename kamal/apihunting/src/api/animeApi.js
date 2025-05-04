const BASE_URL = 'https://anime-db.p.rapidapi.com/anime';

const headers = {
  'x-rapidapi-key': '80e7496eadmshb5bc4ed6be2dc76p1c54d8jsn73be2e3f9633',
  'x-rapidapi-host': 'anime-db.p.rapidapi.com',
};

export const fetchAnimeData = async (searchTerm = '') => {
  const url = `${BASE_URL}?page=1&size=20&sortBy=ranking&sortOrder=asc${searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : ''}`;

  try {
    const response = await fetch(url, { method: 'GET', headers });
    const result = await response.json();
    console.log(result);
    return result.data || [];
  } catch (error) {
    console.error('Error fetching anime list:', error);
    return [];
  }
};

export const fetchAnimeById = async (animeId) => {
  const url = `${BASE_URL}/by-id/${animeId}`;

  try {
    const response = await fetch(url, { method: 'GET', headers });
    if (!response.ok) throw new Error('Anime not found');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching anime by ID (${animeId}):`, error);
    return null;
  }
};
