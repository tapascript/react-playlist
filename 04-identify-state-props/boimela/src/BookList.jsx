import PropTypes from "prop-types";
import BookRow from "./BookRow";

function BookList({ searchTerm, books }) {
    const rows = [];
    books.forEach((book) => {
        if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
            return;
        }
        rows.push(<BookRow key={book.id} book={book} />);
    });

    console.log(rows);

    return <div className="space-y-4">{rows}</div>;
}
BookList.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        })
    ).isRequired,
    searchTerm: PropTypes.string.isRequired,
};

export default BookList;
