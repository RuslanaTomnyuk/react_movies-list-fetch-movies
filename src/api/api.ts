const API_URL = ' http://www.omdbapi.com/?apikey=1baacbe';

export const getMovie = async (endpoint: string) => {
  const response = await fetch(`${API_URL}&t=${endpoint}`);

  return response.json();
};