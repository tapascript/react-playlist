import { Star } from "lucide-react";
import PropTypes from "prop-types";

function FeatureBook({ book, onFeatureBook }) {
    return (
        <Star
            className="cursor-pointer"
            color={book.featured ? "Green" : "Black"}
            onClick={() => onFeatureBook(book.id)}
        />
    );
}

FeatureBook.propTypes = {
    book: PropTypes.object.isRequired,
    onFeatureBook: PropTypes.func.isRequired,
};

export default FeatureBook;
