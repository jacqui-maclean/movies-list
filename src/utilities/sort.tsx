import Movie from "../components/MoviesList";

interface Props {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
}

export const sortAlphabetic = (movies: Props[]) => {
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

export const sortReverseAlphabetic = (movies: Props[]) => {
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

export const sortNumeric = (movies: Props[]) => {
  const numericOrderedMovies = movies!.sort((a, b) => {
    return parseFloat(b.Year) - parseFloat(a.Year);
  });
  return [...numericOrderedMovies];
};
export const sortReverseNumeric = (movies: Props[]) => {
  const numericReverseOrderedMovies = movies!.sort((a, b) => {
    return parseFloat(a.Year) - parseFloat(b.Year);
  });
  return [...numericReverseOrderedMovies];
};
