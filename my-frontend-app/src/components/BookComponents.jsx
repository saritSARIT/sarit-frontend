import React, { useEffect, useState } from "react";
import { getBooks, addBook } from "../servise/Http";

function BookComponents() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  const handleAddBook = async () => {
    const newBook = { id: 5, title: "book5" };
    await addBook(newBook);
    setBooks(await getBooks());
  };

  return (
    <div>
      <h1>ספרים</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      <button onClick={handleAddBook}>➕ הוסף ספר</button>
    </div>
  );
}

export default BookComponents;

