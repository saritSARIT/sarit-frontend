import React from "react";
import { getBooks, addBook } from "../servise/Http";

function BookComponents() {
  const showBooks = async () => {
    const books = await getBooks();
    console.log(" רשימת ספרים:", books);
  };



  const handleAddBook = async () => {
    const books = await getBooks();
    const lastId = books.length > 0 ? books[books.length - 1].id : 0;

    const newBook = { id: lastId + 1, title: `book${lastId + 1}` };
    await addBook(newBook);

    console.log("ספר חדש נוסף:", newBook);

    const updatedBooks = await getBooks();
    console.log(" רשימת ספרים מעודכנת:", updatedBooks);
  };

  return (
    <div>
      <button onClick={showBooks}> הצג ספרים</button>
      <button onClick={handleAddBook}> הוסף ספר</button>
    </div>
  );
}

export default BookComponents;


