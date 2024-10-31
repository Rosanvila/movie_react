import React, { useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import Cards from "../components/Cards";

const Fav = () => {
  const [favMovie, setFavMovie] = React.useState([]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("fav"));
    if (fav) {
      fav.map(async (id) => {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=03a005ba73a452bea154f766bc1e7562&language=en-US`
        );
        setFavMovie((prev) => [...prev, res.data]);
      });
    }
  }, []);

  return (
    <v>
      <Header />
      <div className="favorites">
        {favMovie.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </v>
  );
};

export default Fav;
