function MovieCard({ movie }) {
const addToFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const alreadyAdded = favorites.some(fav => fav.id === movie.id);
  if (alreadyAdded) {
    const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } else {
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-rating">⭐ {movie.vote_average}</span>
          <span className="movie-year">{movie.release_date.substring(0, 4)}</span>
        </div>
        <button className="favorite-button" onClick={addToFavorites}>
          ♡ Add to Favorites
          </button>
      </div>
    </div>
  );
};

export default MovieCard;