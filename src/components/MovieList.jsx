// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return movies.map(({ title }) => <MovieCard key={ title } />);
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
