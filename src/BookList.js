import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
  const bookItems = props.books.map((book, idx) => (
    <li key={'book'+idx}>
      <BookCard
        book={book}
        bookshelves={props.bookshelves}
        index={idx}
        onBookshelfMove={props.onBookshelfMove}
      />
    </li>
  ));

  return (
    <ol className="books-grid">
      {bookItems}
    </ol>
  )
}

export default BookList;
