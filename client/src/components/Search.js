import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieRow from './MovieRow';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await axios.get(`/api/movies/search/${encodeURIComponent(query)}`);
      setResults(res.data);
    } catch (err) {
      console.error('Search failed', err);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          style={{ width: '100%', padding: '10px', fontSize: '18px' }}
        />
        <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {results.length > 0 && (
        <MovieRow title={`Search Results for "${query}"`} movies={results} />
      )}
    </div>
  );
};

export default Search;
