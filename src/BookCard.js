import React from 'react';

const BookCard = (props) => {
  const { book, bookshelves } = props;

  const authorList = book.authors && book.authors.map((author) => (
      <div
        key={`author-${author}`}
        className="book-authors"
      >
        {author}
      </div>
    ))

  const bookshelfDestinations = bookshelves.map((bookshelf) => (
    <option
      key={`bookshelfDestination-${bookshelf.shelf}`}
      value={bookshelf.shelf}
    >
      {bookshelf.title}
    </option>
  ));

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            {bookshelfDestinations}
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {authorList}
    </div>
  )
}

export default BookCard;
