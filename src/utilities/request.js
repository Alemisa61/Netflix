const API = process.env.REACT_APP_API;

const request = {
  movie1: `/discover/movie?api_key=${API}&with_genres=28`,
  tv: `/discover/tv?api_key=${API}&with_genres=16`,
  movie2: `/discover/movie?api_key=${API}&with_genres=12`,
  movie3: `/discover/movie?api_key=${API}&with_genres=878`,
  movie4: `/movie/popular?api_key=${API}&with_backdrop_path="/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg"`,
};

export default request;
