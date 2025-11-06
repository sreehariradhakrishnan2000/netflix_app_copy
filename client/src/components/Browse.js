import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroBanner from './HeroBanner';
import MovieRow from './MovieRow';
import { Link } from 'react-router-dom';

const Browse = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await axios.get('/api/movies/trending');
        setTrendingMovies(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch trending movies', err);
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <HeroBanner movie={trendingMovies[0]} />
      <MovieRow title="Trending Now" movies={trendingMovies} />
      {/* Add more rows as needed */}
    </div>
  );
};

export default Browse;
