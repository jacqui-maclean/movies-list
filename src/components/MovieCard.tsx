import { Movie } from "./MoviesList";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div
      className="card movieCard"
      style={{
        width: "18rem",
        marginRight: "1rem",
        marginBottom: "1rem",
        border: "none",
      }}
    >
      <img src={movie.Poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            IMDB id number is {movie.imdbID}
          </small>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
