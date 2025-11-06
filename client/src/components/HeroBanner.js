import React from 'react';

const HeroBanner = ({ movie }) => {
  if (!movie) return null;

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: `url(${backdropUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        padding: '0 50px',
      }}
    >
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <button>Play</button>
        <button>My List</button>
      </div>
    </div>
  );
};

export default HeroBanner;
