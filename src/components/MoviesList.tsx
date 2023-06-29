import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SortMovies from "./SortMovies";
import {
  sortAlphabetic,
  sortNumeric,
  sortReverseAlphabetic,
  sortReverseNumeric,
} from "../utilities/sort";
import ToggleTheme from "./ToggleTheme";
import { API_KEY } from "../secret-consts";

interface Result {
  Search: Movie[];
}

export interface Movie {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
}

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=" + API_KEY + "&s=batman"
      );
      let results = await response.json();
      //can not use dot notation for typing eg :Result.Search, have to use :Result["Search"]
      let Movies: Result["Search"] = results.Search; //we searched for batman movies in the api call, so we get the results of the search like this eg response.Search
      setMovies(Movies);
    };
    fetchMovies();
  }, []);

  const handleSort = (order: string) => {
    switch (order) {
      case "title-reverse":
        setMovies(sortReverseAlphabetic(movies!));
        break;
      case "title":
        setMovies(sortAlphabetic(movies!));
        break;
      case "yearNew":
        setMovies(sortNumeric(movies!));
        break;
      case "yearOld":
        setMovies(sortReverseNumeric(movies!));
        break;
      default:
    }
  };

  return (
    <div
      className="container text-center"
      style={{ backgroundColor: darkMode ? "rgb(14 14 15)" : "white" }}
    >
      <div className="row pt-5 pb-2" style={{ justifyContent: "space-around" }}>
        <SortMovies onSort={handleSort} />
        <ToggleTheme
          darkMode={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />
      </div>
      <div className="row" style={{ justifyContent: "space-evenly" }}>
        {movies?.map((item) => (
          <MovieCard movie={item} key={item.imdbID} />
        ))}
      </div>
    </div>
  );
};
export default MoviesList;
