import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';

class Library extends Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }));
    });
  }

  render() {
    const bookshelfList = this.props.bookshelves.map((bookshelf) => (
      <BookShelf
        key={`bookshelf-${bookshelf.shelf}`}
        title={bookshelf.title}
        books={this.state.books.filter((book) => book.shelf === bookshelf.shelf)}
        bookshelves={this.props.bookshelves}
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
}

export default Library;
