import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './App.css';
import { useState } from 'react';
import { searchMovies } from './services/movieService';

function App() {
const [searchResults, setSearchResults] = useState([]);
async function handleSearch(query) {
  try {
    const results = await searchMovies(query);
    setSearchResults(results);
  } catch (error) {
    console.error("Error looking for movies:", error);
  }
}

  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route 
          path="/" 
          element={<Home searchResults={searchResults} />}
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;