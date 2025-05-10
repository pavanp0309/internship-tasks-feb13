import React from "react";
import MovieCard from "./components/MovieCard";
import movies from "./data/movies";

const App = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ color: "#d81f26", marginBottom: "2rem" }}>🎬 Movie Showtime Viewer</h1>
      <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;