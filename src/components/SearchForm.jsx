import React from 'react';

const SearchForm = () => (
  <div className="search-form">
    <label htmlFor="search-bar">
      <input
        id="search-bar"
        className="search-bar"
        type="text"
        placeholder="Type an ingredient"
        label="Type an ingredient"
      />
    </label>
    <button className="search-button" type="submit">Search</button>
  </div>
);

export default SearchForm;
