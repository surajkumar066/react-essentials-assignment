import MovieCard from "./MovieCard";

function MovieList({ movies, searchTerm, favourites, onToggleFavourite }) {
  if (searchTerm === "") {
    return <p className="message">Type something to search movies...</p>;
  }

  if (movies.length === 0) {
    return <p className="message">No movies found matching "{searchTerm}"</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavourite={favourites.includes(movie.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
}

export default MovieList;