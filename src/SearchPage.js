import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar';
import BookList from './BookList';

class SearchPage extends Component {
  state={
    searchResult:[]
  }

  handleSearch = (searchValue) => {
    if (searchValue !== '') {
      BooksAPI.search(searchValue)
        .then((books) => {
          if (books.length > 0) {
            this.setState(() => ({
              searchResult: books
            }))
          } else {
            this.setState(() => ({
              searchResult: []
            }));
          }
        });
    } else {
      this.setState(() => ({
        searchResult: []
      }));
    }
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar
          onSearch={(searchValue) => this.handleSearch(searchValue)}
          handleSearchPageClose={this.props.handleSearchPageClose}
        />
        <div className="search-books-results">
          {this.state.searchResult.length > 0
            ? (<BookList
              books={this.state.searchResult}
              bookshelves={this.props.bookshelves}
            />)
            : <h1>No results found!</h1>}
        </div>
      </div>
    )
  }
}

export default SearchPage;
