import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    PopularMovies();
  }, []);

  const PopularMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=03a005ba73a452bea154f766bc1e7562`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SearchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=03a005ba73a452bea154f766bc1e7562&query=${search}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search === "") {
      return PopularMovies();
    }
    SearchMovies(search);
  };

  return (
    <div className={"form-component"}>
      <div className={"form-container"}>
        <form onSubmit={handleSubmit}>
          <input
            type={"text"}
            onChange={(ev) => setSearch(ev.target.value)}
            placeholder={"Select a movie"}
            id="search-input"
          />
          <input type={"submit"} value={"Search"} />
        </form>
      </div>
      <div className="result">
        {movies.slice(0, 12).map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
