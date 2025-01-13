
import PropTypes from 'prop-types';

function BookDetails({book}) {
  return (
    <div>{book.title}</div>
  )
}

BookDetails.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookDetails