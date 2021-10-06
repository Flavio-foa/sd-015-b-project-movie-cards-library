// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main className="movie-list">
        {movies.map((indivi, index) => <MovieCard key={ index } atual={ indivi } />)}
      </main>
    );
  }
}

export default MovieList;
