import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="search-books-bar">
      <button className="close-search" onClick={() => props.handleSearchPageClose()}>Close</button>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author"/>

      </div>
    </div>
  )
}

export default SearchBar;
