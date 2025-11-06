import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const MovieRow = ({ title, movies }) => {
  const { user, addToWatchlist } = useContext(AuthContext);

  const handleAddToWatchlist = async (movie) => {
    if (user) {
      try {
        await addToWatchlist(movie);
        alert('Added to watchlist');
      } catch (err) {
        alert('Failed to add to watchlist');
      }
    } else {
      alert('Please login to add to watchlist');
    }
  };

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <button onClick={() => handleAddToWatchlist(movie)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
