import { useState } from "react";
import Heading from "./Heading";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import Filter from "./Filter";

export default function MovieWatchlist() {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState("all");

    // Add new movie (Immutable update)
    const addMovie = ({title, ott}) => {
        const newMovie = {
            id: crypto.randomUUID(),
            title,
            ott,
            rating: null,
            watched: false,
        };
        setMovies([...movies, newMovie]); // Spread operator to maintain immutability
    };

    // Update rating (Immutable update)
    const rateMovie = (id, rating) => {
        setMovies(movies.map(movie =>
            movie.id === id ? { ...movie, rating } : movie
        ));
    };

    // Toggle watched status (Immutable update)
    const toggleWatched = (id) => {
        setMovies(movies.map(movie =>
            movie.id === id ? { ...movie, watched: !movie.watched } : movie
        ));
    };

    // Delete movie (Immutable update)
    const deleteMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    // Filter movies
    const filteredMovies = movies.filter(movie => {
        if (filter === "watched") return movie.watched;
        if (filter === "unwatched") return !movie.watched;
        return true;
    });

    return (
        <div className="flex flex-col w-1/2 m-3 items-center justify-center p-6 bg-slate-900 text-white rounded-lg shadow-lg">
            <Heading />
            <MovieForm addMovie={addMovie} />
            <Filter setFilter={setFilter} />
            <MovieList 
                movies={filteredMovies} 
                rateMovie={rateMovie} 
                toggleWatched={toggleWatched} 
                deleteMovie={deleteMovie} 
            />
        </div>
    );
}