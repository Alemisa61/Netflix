import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utilities/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

export default function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState(""); // Updated function name
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {console.log(fetchURL);

        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
        console.log(request);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    })();
  }, [fetchURL]);

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => {
          console.error("Error fetching trailer:", error);
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterlarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
      </div>
      
    </div>
  );
}
