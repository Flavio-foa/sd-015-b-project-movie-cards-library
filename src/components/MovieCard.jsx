import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div key={ movie.title } className="movie-card">
          <img src={ movie.imagePath } alt="imagem do filme" />
          <h4>{ movie.title }</h4>
          <h5>{ movie.subtitle }</h5>
          <p>{ movie.storyline }</p>
          <div>
            <Rating rating={ movie.rating } />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
