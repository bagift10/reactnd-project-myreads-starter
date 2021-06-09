import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (e) => {    
    if (this.props.onSearch) {
      this.props.onSearch(e.target.value);
    }
  }

  render () {
    return (
      <div className="search-books-bar">
        <button className="close-search" onClick={() => this.props.handleSearchPageClose()}>Close</button>
        <div className="search-books-input-wrapper">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="searchValue"
              placeholder="Search by title or author"
              onChange={(e) => this.handleChange(e)}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;
