import BookRow from "./BookRow";
// Mock data for books
const BOOKS = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        featured: false,
    },
    { id: 2, title: "1984", author: "George Orwell", featured: false },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        featured: false,
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        featured: false,
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        featured: false,
    },
];

function BookList() {
    return (
        <ul className="space-y-4">
            {BOOKS.map((book) => (
                <li
                    key={book.id}
                    className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
                >
                    <BookRow book={book} />
                </li>
            ))}
        </ul>
    );
}

export default BookList;
