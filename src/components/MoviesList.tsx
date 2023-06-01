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
      let Movies = results.Search;
      setMovies(Movies);
    };
    fetchMovies();
  }, []);

  const handleSort = (order: string) => {
    switch (order) {
      case "title-reverse":
        let resultA = sortReverseAlphabetic(movies!);
        setMovies([...resultA]);
        break;
      case "title":
        let resultB = sortAlphabetic(movies!);
        setMovies([...resultB]);
        break;
      case "yearNew":
        let resultC = sortNumeric(movies!);
        setMovies([...resultC]);
        break;
      case "yearOld":
        let resultD = sortReverseNumeric(movies!);
        setMovies([...resultD]);
        break;
      default:
      // code block
    }
  };
  const handleToggle = () => {
    console.log("toggle");
    setDarkMode(!darkMode);
  };
  return (
    <div
      className="container text-center"
      style={{ backgroundColor: darkMode ? "rgb(14 14 15)" : "white" }}
    >
      <div className="row pt-5 pb-2" style={{ justifyContent: "space-around" }}>
        <SortMovies onSort={handleSort} />
        <ToggleTheme darkMode={darkMode} onToggle={handleToggle} />
      </div>
      <div className="row" style={{ justifyContent: "space-evenly" }}>
        {movies?.map((item) => (
          //   <div key={item.Title}>{item.Title}</div>
          <MovieCard movie={item} key={item.imdbID} />
        ))}
      </div>
    </div>
  );
};
export default MoviesList;
