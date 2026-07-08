import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import FavouritesList from "./components/FavouritesList";
import { movies } from "./movieData";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState([]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavourite = (movieId) => {
    if (favourites.includes(movieId)) {
      setFavourites(favourites.filter((id) => id !== movieId));
    } else {
      setFavourites([...favourites, movieId]);
    }
  };

  const favouriteMovies = movies.filter((movie) =>
    favourites.includes(movie.id)
  );

  return (
    <div className="app">
      <h1>Movie Database</h1>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <MovieList
        movies={filteredMovies}
        searchTerm={searchTerm}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      />

      <FavouritesList movies={favouriteMovies} />
    </div>
  );
}

export default App;