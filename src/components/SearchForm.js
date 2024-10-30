import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

const SearchForm = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=03a005ba73a452bea154f766bc1e7562`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={"form-component"}>
      <div className={"form-container"}>
        <form>
          <input type={"text"} placeholder={"Select a movie"} />
          <input type={"submit"} value={"Search"} />
        </form>
      </div>
      <div className="result">
        {movie.slice(0, 12).map((movie) => (
            <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
