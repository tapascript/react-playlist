import { Star } from "lucide-react";
import PropTypes from "prop-types";

function FeatureBook({ book, onFeatureBook }) {
    return (
        <button
            className="cursor-pointer"
            onClick={() => onFeatureBook(book.id)}
        >
            <Star color={book.featured ? "Green" : "Black"} />
        </button>
    );
}

FeatureBook.propTypes = {
    book: PropTypes.object.isRequired,
    onFeatureBook: PropTypes.func.isRequired,
};

export default FeatureBook;
