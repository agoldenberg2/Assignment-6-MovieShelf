import MovieGrid from '../components/MovieGrid';
import { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/movieService';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

// Static movie data for template


function Home({ searchResults = [] }) {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
useEffect(() => {
  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError('');
      const movieData = await getPopularMovies();
      setMovies(movieData);
    } catch (error) {
      setError('Failed to load movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  fetchMovies();
}, []);
  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
      <MovieGrid movies={searchResults.length > 0 ? searchResults : movies} />
      )}
    </main>
  );
};

export default Home;