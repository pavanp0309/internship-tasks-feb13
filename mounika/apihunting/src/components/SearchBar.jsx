import React from 'react';

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search by title..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;