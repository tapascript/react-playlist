import PropTypes from "prop-types";

import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";

function BookRow({ book }) {
    console.log(book);
    return (
        <>
            <BookDetails title={book.title} author={book.author} />
            <FeatureBook />
        </>
    );
}

BookRow.propTypes = {
    book: PropTypes.object.isRequired,
};

export default BookRow;
