import { Movie } from "../components/MoviesList";

export const sortAlphabetic = (movies: Movie[]) => {
  const alphaOrderedMovies = movies!.sort((a, b) => {
    const nameA = a.Title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.Title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  return [...alphaOrderedMovies];
};

export const sortReverseAlphabetic = (movies: Movie[]) => {
  const alphaReverseOrderedMovies = movies!.sort((a, b) => {
    const nameA = a.Title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.Title.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  return [...alphaReverseOrderedMovies];
};

export const sortNumeric = (movies: Movie[]) => {
  const numericOrderedMovies = movies!.sort((a, b) => {
    return parseFloat(b.Year) - parseFloat(a.Year);
  });
  return [...numericOrderedMovies];
};
export const sortReverseNumeric = (movies: Movie[]) => {
  const numericReverseOrderedMovies = movies!.sort((a, b) => {
    return parseFloat(a.Year) - parseFloat(b.Year);
  });
  return [...numericReverseOrderedMovies];
};
