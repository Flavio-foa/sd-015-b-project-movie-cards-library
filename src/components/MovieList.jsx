import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((movie) => <MovieCard />)}
        {movies.map((movie) => <MovieCard key={ movie.title } />)}
      </section>
    );
  }
}

export default MovieList;
