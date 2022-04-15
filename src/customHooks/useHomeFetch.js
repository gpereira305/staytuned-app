import { useEffect, useState } from "react";
import { popularMoviesURL } from "../utils/config";

export const useHomeFetch = () => {
  const [popMovies, setPopMovies] = useState([]);
  const [popLoading, setPopLoading] = useState(true);
  const [popError, setPopError] = useState(false);

  const fetchPopMovies = async (endpoint) => {
    setPopError(false);
    setPopLoading(true);

    const loadingMoreMovies = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();
      setPopMovies((prev) => ({
        ...prev,
        popMovies:
          loadingMoreMovies !== -1
            ? [...prev.popMovies, ...result.results]
            : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (err) {
      setPopError(true);
      console.log(err);
    }
    setPopLoading(false);
  };

  useEffect(() => {
    fetchPopMovies(popularMoviesURL);
  }, []);

  return [
    {
      popMovies,
      popLoading,
      popError,
    },
    fetchPopMovies,
  ];
};
