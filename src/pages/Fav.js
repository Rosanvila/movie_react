import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Cards from "../components/Cards";

const LikedTitles = () => {
  const [favMovie, setFavMovie] = useState([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const storedFavorites = localStorage.getItem("movies");
      const moviesId = storedFavorites ? storedFavorites.split(",") : [];
      const moviePromises = moviesId.map((id) =>
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=03a005ba73a452bea154f766bc1e7562`
        )
      );
      try {
        const movieResponses = await Promise.all(moviePromises);
        setFavMovie(movieResponses.map((response) => response.data));
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchFavoriteMovies();
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>Favorites movies</h2>
      <div className="result">
        {favMovie.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default LikedTitles;
