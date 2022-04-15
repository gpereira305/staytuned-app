import { useEffect, useState } from "react";
import { nowPlayingURL } from "../utils/config";

export const useHeroFetch = () => {
  const [playingMovies, setPlayingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchPlayingMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    const loadingMoreMovies = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();
      setPlayingMovies((prev) => ({
        ...prev,
        playingMovies:
          loadingMoreMovies !== -1
            ? [...prev.playingMovies, ...result.results]
            : [...result.results],
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
    fetchPlayingMovies(nowPlayingURL);
  }, []);

  return [
    {
      playingMovies,
      loading,
      error,
    },
    fetchPlayingMovies,
  ];
};
