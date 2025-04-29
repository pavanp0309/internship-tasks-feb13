const API_KEY = 'Gjws7SlgSwN7LLrvNHxWblQx7eilYaN884inHpgF'; 
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchNASAData = async () => {
  const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&count=12`);
  if (!response.ok) {
    throw new Error('Failed to fetch NASA data');
  }
  return response.json();
};