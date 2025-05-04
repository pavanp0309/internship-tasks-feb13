import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      className="d-flex justify-content-center align-items-center gap-2 mb-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control rounded-pill px-4 py-2 shadow-sm"
        placeholder="🔍 Search anime..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ maxWidth: '400px' }}
      />
      <button
        type="submit"
        className="btn btn-primary rounded-pill px-4 py-2 shadow"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
