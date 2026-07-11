<<<<<<< HEAD
import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSummary";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskSummary />
        <TaskList />
      </div>
    </TaskProvider>
=======
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
>>>>>>> d8224f7c8ad1b9247412427ec512173e5fd5f5a4
  );
}

export default App;