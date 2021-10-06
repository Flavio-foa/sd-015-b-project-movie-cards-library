// implement MovieList component here
import React from 'react';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {movies.map((movie) => (
          <MovieCard movies={ movie } />
        ))}
      </section>
    );
  }
}

export default MovieList;
