import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token with backend
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // For now, assume user is logged in
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      setUser({ token: res.data.token });
    } catch (err) {
      throw err;
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await axios.post('/api/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      setUser({ token: res.data.token });
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  const addToWatchlist = async (movie) => {
    try {
      await axios.post('/api/movies/watchlist', {
        movieId: movie.id,
        title: movie.title,
        poster_path: movie.poster_path
      });
      // Optionally, update local state if needed
    } catch (err) {
      throw err;
    }
  };

  const removeFromWatchlist = async (movieId) => {
    try {
      await axios.delete(`/api/movies/watchlist/${movieId}`);
      // Optionally, update local state if needed
    } catch (err) {
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, addToWatchlist, removeFromWatchlist, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
