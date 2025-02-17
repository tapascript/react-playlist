import PropTypes from "prop-types";
import ReactStars from "react-stars";

export default function MovieItem({
    movie,
    rateMovie,
    toggleWatched,
    deleteMovie,
}) {
    const ratingChanged = (newRating) => {
        rateMovie(movie.id, newRating);
    };
    return (
        <li className="flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md">
            <span
                className={`flex-1 mr-4 ${
                    movie.watched ? "line-through text-gray-400" : "text-white"
                }`}
            >
                {movie.title} on {movie.ott} {movie.rating && `⭐ ${movie.rating}/5`}
            </span>
            <div className="flex gap-2">
                <ReactStars
                    count={5}
                    value={movie.rating}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                />

                <button
                    onClick={() => toggleWatched(movie.id)}
                    className="px-2 py-1 text-sm bg-green-600 hover:bg-green-700 text-white rounded"
                >
                    {movie.watched ? "Unwatch" : "Watched"}
                </button>
                <button
                    onClick={() => deleteMovie(movie.id)}
                    className="px-2 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded"
                >
                    Remove
                </button>
            </div>
        </li>
    );
}

MovieItem.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        ott: PropTypes.string.isRequired,
        rating: PropTypes.number,
        watched: PropTypes.bool.isRequired,
    }).isRequired,
    rateMovie: PropTypes.func.isRequired,
    toggleWatched: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired,
};
