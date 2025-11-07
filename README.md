# Netflix Clone Application

A full-stack Netflix-like streaming application built with React, Node.js, Express, and PostgreSQL. Features user authentication, movie browsing, search functionality, and personalized watchlists.

## Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Movie Browsing**: Browse trending movies and detailed movie information
- **Search Functionality**: Search for movies by title
- **Personalized Watchlist**: Add and remove movies from your watchlist
- **Responsive Design**: Mobile-friendly UI matching Netflix's design
- **TMDB Integration**: Real-time movie data from The Movie Database API

## Tech Stack

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- CSS for styling (Netflix-inspired design)
- Context API for state management

### Backend
- Node.js with Express.js
- PostgreSQL database with Sequelize ORM
- JWT for authentication
- bcryptjs for password hashing
- TMDB API integration

## Project Structure

```
netflix_app_copy/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # React context for state
│   │   ├── App.js          # Main app component
│   │   └── index.js        # App entry point
│   └── package.json
├── server/                 # Node.js backend
│   ├── middleware/         # Authentication middleware
│   ├── models/             # Sequelize models
│   ├── routes/             # API routes
│   ├── index.js            # Server entry point
│   └── package.json
├── README.md
└── TODO.md                 # Development progress tracker
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database
- TMDB API key (get from https://www.themoviedb.org/)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd netflix_app_copy
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Variables**

   Create a `.env` file in the `server` directory:
   ```env
   DATABASE_URL=postgres://username:password@localhost:5432/netflix_clone
   JWT_SECRET=your_jwt_secret_key
   TMDB_API_KEY=your_tmdb_api_key
   PORT=5000
   ```

5. **Database Setup**

   Create a PostgreSQL database named `netflix_clone` and ensure the connection string in `.env` is correct.

6. **Run the Application**

   **Backend:**
   ```bash
   cd server
   npm start
   ```

   **Frontend:**
   ```bash
   cd client
   npm start
   ```

   The application will be available at:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Movies
- `GET /api/movies/trending` - Get trending movies
- `GET /api/movies/search/:query` - Search movies
- `GET /api/movies/:id` - Get movie details
- `GET /api/movies/watchlist` - Get user's watchlist (authenticated)
- `POST /api/movies/watchlist` - Add movie to watchlist (authenticated)
- `DELETE /api/movies/watchlist/:movieId` - Remove movie from watchlist (authenticated)

## Database Schema

### Users Table
- `id` (Primary Key, Auto Increment)
- `username` (String, Unique, Not Null)
- `email` (String, Unique, Not Null)
- `password` (String, Not Null)
- `watchlist` (JSON, Default: [])
- `createdAt` (Timestamp)
- `updatedAt` (Timestamp)

## Recent Updates

### Database Migration to PostgreSQL
- Migrated from MongoDB/Mongoose to PostgreSQL/Sequelize ORM
- Updated all models and routes to use Sequelize queries
- Implemented JSON column for watchlist storage
- Added proper error handling and logging
- Maintained all existing functionality while improving performance

## Development Status

See `TODO.md` for current development progress and upcoming features.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes only.
