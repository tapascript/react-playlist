import { useState } from "react";
import PropTypes from "prop-types";

export default function MovieForm({ addMovie }) {
    const [movieData, setMovieData] = useState({
        title: "",
        ott: ""
    });

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        console.log(key, value)
        setMovieData({...movieData, [key]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(movieData)
        if (!movieData?.title.trim() || !movieData?.ott.trim()) return;
        addMovie(movieData);
        setMovieData({...movieData, title: "", ott: ""})
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 mb-8 w-full">
            <input
                type="text"
                placeholder="Enter movie name..."
                name="title"
                value={movieData?.title}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-700 bg-gray-800 rounded text-white"
            />
            <select
                name="ott"
                value={movieData?.ott}
                onChange={handleChange}
                className="border border-gray-300 rounded-md"
                >
                <option value="">Select an OTT</option>
                <option value="Netfilx">Netfilx</option>
                <option value="Amazon Prime">Amazon Prime</option>
                <option value="Hotstar">Hotstar</option>
                <option value="SonyLIV">SonyLIV</option>
                <option value="Hoichoi">Hoichoi</option>
                <option value="Others">Others</option>
            </select>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
                Add
            </button>
        </form>
    );
}

MovieForm.propTypes = {
    addMovie: PropTypes.func.isRequired,
};
