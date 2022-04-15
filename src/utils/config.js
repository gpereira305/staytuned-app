// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f
// Read more about the API here: https://developers.themoviedb.org/

// const API_URL = "https://api.themoviedb.org/3/";
// const API_KEY = "467520b057249a7e0a457ab0984e2623";
// const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// const BACKDROP_SIZE = "w1280";
// const POSTER_SIZE = "w500";

// export { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE };
export const apiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: "467520b057249a7e0a457ab0984e2623",
  originalImg: (imgPath) => `http://image.tmdb.org/t/p/original/${imgPath}`,
  w500Img: (imgPath) => `http://image.tmdb.org/t/p/w500/${imgPath}`,
};
