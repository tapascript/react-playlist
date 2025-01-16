import { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

export default function Boimela() {
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
    const [searchTerm] = useState("");

    return (
        <div className="container mx-auto p-4">
            <Header />
            <SearchBar searchTerm={searchTerm}/>
            <BookList searchTerm={searchTerm} books={BOOKS}/>
        </div>
    );
}
