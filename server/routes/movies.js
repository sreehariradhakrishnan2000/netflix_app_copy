const express = require('express');
const axios = require('axios');
const auth = require('../middleware/auth');

const router = express.Router();

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Get trending movies
router.get('/trending', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`);
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch trending movies' });
  }
});

// Get movie details
router.get('/:id', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${req.params.id}?api_key=${TMDB_API_KEY}&append_to_response=videos`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
});

// Search movies
router.get('/search/:query', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${req.params.query}`);
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to search movies' });
  }
});

// Get user's watchlist (requires auth)
router.get('/watchlist', auth, async (req, res) => {
  try {
    const user = await require('../models/User').findByPk(req.user.id);
    res.json(user.watchlist);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch watchlist' });
  }
});

// Add to watchlist (requires auth)
router.post('/watchlist', auth, async (req, res) => {
  try {
    const { movieId, title, poster_path } = req.body;
    const user = await require('../models/User').findByPk(req.user.id);
    if (user.watchlist.some(item => item.movieId === movieId)) {
      return res.status(400).json({ error: 'Movie already in watchlist' });
    }
    user.watchlist.push({ movieId, title, poster_path, addedAt: new Date() });
    await user.save();
    res.json(user.watchlist);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add to watchlist' });
  }
});

// Remove from watchlist (requires auth)
router.delete('/watchlist/:movieId', auth, async (req, res) => {
  try {
    const user = await require('../models/User').findByPk(req.user.id);
    user.watchlist = user.watchlist.filter(item => item.movieId !== parseInt(req.params.movieId));
    await user.save();
    res.json(user.watchlist);
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove from watchlist' });
  }
});

module.exports = router;
