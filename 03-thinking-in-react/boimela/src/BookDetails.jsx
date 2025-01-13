import PropTypes from "prop-types";

function BookDetails({ book }) {
    return (
        <div>
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
        </div>
    );
}

BookDetails.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired,
};

export default BookDetails;
