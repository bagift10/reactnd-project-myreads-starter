import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Library from './Library';
import SearchPage from './SearchPage';
import './App.css';

class BooksApp extends React.Component {
  state = {
    bookshelves: [
      {
        shelf: 'currentlyReading',
        title: 'Currently Reading'
      },
      {
        shelf: 'wantToRead',
        title: 'Want to Read'
      },
      {
        shelf: 'read',
        title: 'Read'
      }
    ],
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }));
    });
  }

  handleBookshelfMove = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      // Update books that are currently in state
      if (this.state.books.filter((b) => b.id === book.id).length !== 0) {
        this.setState((currentState) => ({
          books: currentState.books.map((b) => b.id === book.id ? { ...b, shelf } : b )
        }));
      }
      // Add new books from the search page
      else {
        this.setState((currentState) => ({
          books: currentState.books.concat([{...book, shelf}])
        }));
      }
    }).catch((error) => {
      console.error('Error updating bookshelf: ', error);
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          path='/search'
          render={({ history }) => (
            <SearchPage
              books={this.state.books}
              bookshelves={this.state.bookshelves}
              handleSearchPageClose={() => history.push('/search')}
              onBookshelfMove={this.handleBookshelfMove}
            />
          )}
        />
        <Route
          exact
          path='/'
          render={({ history }) => (
            <div>
              <Library
                books={this.state.books}
                bookshelves={this.state.bookshelves}
                onBookshelfMove={this.handleBookshelfMove}
              />
              <Link
                className="open-search"
                to='/search'
              >
                <button onClick={() => history.push('/')}>Add a book</button>
              </Link>
            </div>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
