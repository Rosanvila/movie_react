import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [movie, setMovie] = useState("");

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
          <h3>{movie.title}</h3>
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
