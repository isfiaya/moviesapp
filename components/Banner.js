// import axios from "axios";
import React, { useEffect, useState } from "react";
// import requests from "../utils/requests";
function Banner({ results }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setMovie(
        results[
        Math.floor(Math.random() * results.length - 1)
        ]
      );
    }
    fetchData();
  }, [results]);

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="bg-cover bg-center relative object-contain flex flex-col mt-5"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        height: "486px",
      }}
    >
      <div className="ml-7 pt-36 h-48 flex-grow">
        <h4 className="text-white">TODAY'S FEATURED FILM</h4>
        <h1 className=" text-5xl font-extrabold pb-1.5 text-white">
          {movie?.title || movie?.name}
          <span className="text-xl font-medium opacity-70 ml-3">
            ( {movie?.first_air_date || movie?.release_date})
          </span>
        </h1>

        {/* <div>
          <button className="btn  hover:text-black hover:bg-gray-300  transition-all duration-200">
            Play
          </button>
          <button className="btn hover:text-black hover:bg-gray-300  transition-all duration-200">
            My List
          </button>
        </div> */}
        <h2 className=" w-96 pt-4 text-xs h-20 text-white">
          {truncate(movie?.overview, 150)}
        </h2>
      </div>

      <div className="banner-fadeBottom h-28" />
    </header>
  );
}

export default Banner;
