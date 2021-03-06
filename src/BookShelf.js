import React from 'react';
import BookList from './BookList';

const BookShelf = (props) => {
  const { title, books, bookshelves } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList
          books={books}
          bookshelves={bookshelves}
          onBookshelfMove={props.onBookshelfMove}
        />
      </div>
    </div>
  )
}

export default BookShelf;
