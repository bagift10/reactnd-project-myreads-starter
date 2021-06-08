import React from 'react';
import Library from './Library';
import SearchPage from './SearchPage';
// import * as BooksAPI from './BooksAPI'
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
      },
      {
        shelf: 'none',
        title: 'None'
      }
    ],
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage
            bookshelves={this.state.bookshelves}
            handleSearchPageClose={() => this.setState({showSearchPage: false})}
          />
        ) : (
          <div>
            <Library
              bookshelves={this.state.bookshelves}
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
