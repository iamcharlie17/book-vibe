import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/public/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  console.log(books);
  return (
    <div>
      <div className="text-3xl font-bold text-center my-4">
        <h1>Books</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {
            books.map(book => <Book key={book.bookId} book = {book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;
