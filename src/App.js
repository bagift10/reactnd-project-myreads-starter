import React from 'react';
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
    showSearchPage: false,
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
        {this.state.showSearchPage ? (
          <SearchPage
            books={this.state.books}
            bookshelves={this.state.bookshelves}
            handleSearchPageClose={() => this.setState({showSearchPage: false})}
            onBookshelfMove={this.handleBookshelfMove}
          />
        ) : (
          <div>
            <Library
              books={this.state.books}
              bookshelves={this.state.bookshelves}
              onBookshelfMove={this.handleBookshelfMove}
            />
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
