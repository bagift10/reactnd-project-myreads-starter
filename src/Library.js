import React from 'react';
import BookShelf from './BookShelf';

const Library = (props) => {

  const bookshelfList = props.bookshelves.map((bookshelf) => (
    <BookShelf
      key={`bookshelf-${bookshelf.shelf}`}
      title={bookshelf.title}
      books={props.books.filter((book) => book.shelf === bookshelf.shelf)}
      bookshelves={props.bookshelves}
      onBookshelfMove={props.onBookshelfMove}
    />
  ));

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelfList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library;
