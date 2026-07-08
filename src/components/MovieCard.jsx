function MovieCard({ movie, isFavourite, onToggleFavourite }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.year} | {movie.genre}</p>
      <button onClick={() => onToggleFavourite(movie.id)}>
        {isFavourite ? "★ Favourited" : "☆ Add to Favourites"}
      </button>
    </div>
  );
}

export default MovieCard;