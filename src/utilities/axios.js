import axios from "axios";

const al = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default al;
