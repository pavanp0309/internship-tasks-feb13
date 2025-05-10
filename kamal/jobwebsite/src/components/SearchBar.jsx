import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Pass search term when form is submitted
  };

  return (
    <form
      className="d-flex justify-content-center align-items-center gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control rounded-pill px-4 py-2 shadow-sm"
        placeholder="🔍 Search jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm as user types
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
