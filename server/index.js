const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://username:password@localhost:5432/netflix_clone', {
  dialect: 'postgres',
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('PostgreSQL connected'))
  .then(() => sequelize.sync())
  .then(() => console.log('Database synced'))
  .catch(err => console.log('PostgreSQL connection error:', err));

// Sync database
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log('Database sync error:', err));

// Export sequelize for models
module.exports.sequelize = sequelize;

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/movies', require('./routes/movies'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
