// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitule }</h5>
        <p>{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </section>
    );
  }
}

export default MovieCard;
