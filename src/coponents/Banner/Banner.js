import React, { useEffect, useState } from "react";
import axios from "../../utilities/axios";
import "../Banner/Banner.css";
import requests from "../../utilities/requests";

export default function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const req = await axios.get(requests.fetchNetflixOriginals);
        console.log(req);
        setMovie(
          req.data.results[Math.floor(Math.random() * req.data.results.length)]
        );
      } catch (error) {
        console.log(error, "error is");
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button_play">play</button>
          <button className="banner_button">Mylist</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
        <div className="banner_fade_button"></div>
      </div>
    </div>
  );
}
