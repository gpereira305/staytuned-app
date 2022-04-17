import { useState, useEffect, useCallback } from "react";
import { apiURL, apiKey } from "../utils/config";

export const useMovieFetch = (movieId) => {
  const [detailedMovieData, setDetailedMovieData] = useState({});
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const fetchData = useCallback(async () => {
    setFetchError(false);
    setFetchLoading(true);

    try {
      const movieDetail = `${apiURL}movie/${movieId}?api_key=${apiKey}`;
      const movieDetailResult = await (await fetch(movieDetail)).json();

      const movieCredits = `${apiURL}movie/${movieId}/credits?api_key=${apiKey}`;
      const movieCreditsResult = await (await fetch(movieCredits)).json();

      const movieVideos = `${apiURL}movie/${movieId}/videos?api_key=${apiKey}`;
      const movieVideosResult = await (await fetch(movieVideos)).json();

      const movieImages = `${apiURL}movie/${movieId}/images?api_key=${apiKey}`;
      const movieImagesResult = await (await fetch(movieImages)).json();

      const movieSimilar = `${apiURL}movie/${movieId}/similar?api_key=${apiKey}`;
      const movieSimilarResult = await (await fetch(movieSimilar)).json();

      //   console.log(movieDetailResult, "DETAIL");
      //   console.log(movieCreditsResult, "CREDITS");
      //   console.log(movieVideosResult, "VIDEOS");
      //   console.log(movieImagesResult, "IMAGES");
      //   console.log(movieSimilarResult, "SIMILAR");
      setDetailedMovieData({
        ...movieDetailResult,
        // ...movieCreditsResult,
        ...movieVideosResult,
        ...movieImagesResult,
        // ...movieSimilarResult,
      });
    } catch (err) {
      console.log(err);
    }
    setFetchLoading(false);
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return [detailedMovieData, fetchLoading, fetchError];
};
