function FavouritesList({ movies }) {
  if (movies.length === 0) return null;

  return (
    <div className="favourites-section">
      <h2>Favourite Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouritesList;