import React from "react";

const Cards = ({ movie }) => {
  return (
    <div className={"card"}>
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={`poster ${movie.title}`}
      />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default Cards;
