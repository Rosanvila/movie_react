import React from "react";

const Cards = ({ movie }) => {
  const dateFormat = (date) => {
    let [yyyy, mm, dd] = date.split("-");
    return `${dd}/${mm}/${yyyy}`;
  };

  const genreAll = () => {
    let genre = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genre.push("Action");
          break;
        case 12:
          genre.push("Adventure");
          break;
        case 16:
          genre.push("Animation");
          break;
        case 35:
          genre.push("Comedy");
          break;
        case 80:
          genre.push("Crime");
          break;
        case 99:
          genre.push("Documentary");
          break;
        case 18:
          genre.push("Drama");
          break;
        case 10751:
          genre.push("Family");
          break;
        case 14:
          genre.push("Fantasy");
          break;
        case 36:
          genre.push("History");
          break;
        case 27:
          genre.push("Horror");
          break;
        case 10402:
          genre.push("Music");
          break;
        case 9648:
          genre.push("Mystery");
          break;
        case 10749:
          genre.push("Romance");
          break;
        case 878:
          genre.push("Science Fiction");
          break;
        case 10770:
          genre.push("TV Movie");
          break;
        case 53:
          genre.push("Thriller");
          break;
        case 10752:
          genre.push("War");
          break;
        case 37:
          genre.push("Western");
          break;
        default:
          genre.push("Unknown");
          break;
      }
    }
    return genre.map((genre, i) => (
      <li key={i} style={{ textTransform: "capitalize" }}>
        {genre}
      </li>
    ));
  };

  const addFav = () => {
    let fav = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!fav.includes(movie.id.toString())) {
      fav.push(movie.id);
      window.localStorage.movies = fav;
    }
  };

  const removeFav = () => {
    let fav = window.localStorage.movies.split(",");
    let newData = fav.filter((id) => id !== movie.id.toString());
    window.localStorage.movies = newData;
  };

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
      <h2>{movie.title}</h2>
      <h5 style={{ textTransform: "capitalize" }}>
        release the : {dateFormat(movie.release_date)}
      </h5>
      <h4 style={{ display: "flex" }}>
        {(Math.ceil(movie.vote_average * 10) / 10).toFixed(1)}/10<span>❤️</span>
      </h4>
      <ul>
        {movie.genre_ids
          ? genreAll()
          : movie.genres.map((genre) => (
              <li key={genre} style={{ textTransform: "capitalize" }}>
                {genre.name}
              </li>
            ))}
      </ul>
      <p>{movie.overview}</p>
      {movie.genre_ids ? (
        <div
          className="btn"
          style={{ textTransform: "capitalize" }}
          onClick={addFav}
        >
          add to my liked list
        </div>
      ) : (
        <div
          className="btn"
          onClick={() => {
            removeFav();
            window.location.reload(true);
          }}
        >
          Remove from my liked list
        </div>
      )}
    </div>
  );
};
export default Cards;
