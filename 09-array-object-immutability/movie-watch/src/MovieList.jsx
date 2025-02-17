import MovieItem from "./MovieItem";
import PropTypes from "prop-types";

export default function MovieList({
    movies,
    rateMovie,
    toggleWatched,
    deleteMovie,
}) {
    return (
        <div className="mt-4">
            {movies.length === 0 ? (
                <p className="text-center text-gray-400">
                    No movies in your watchlist. Add some!
                </p>
            ) : (
                <ul className="space-y-3">
                    {movies.map((movie) => (
                        <MovieItem
                            key={movie.id}
                            movie={movie}
                            rateMovie={rateMovie}
                            toggleWatched={toggleWatched}
                            deleteMovie={deleteMovie}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            ott: PropTypes.string.isRequired,
            watched: PropTypes.bool.isRequired,
            rating: PropTypes.number,
        })
    ).isRequired,
    rateMovie: PropTypes.func.isRequired,
    toggleWatched: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired,
};
