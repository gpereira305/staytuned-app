import { useEffect, useState } from "react";
import { apiConfig } from "../utils/config";

export const useHomeFetch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      const result = await await (await fetch(endpoint)).json();
      setMovies((prev) => ({
        ...prev,
        movies: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(
      `${apiConfig.baseURL}movie/upcoming?api_key=${apiConfig.apiKey}`
    );
  }, []);

  return [
    {
      movies,
      loading,
      error,
    },
    fetchMovies,
  ];
};
