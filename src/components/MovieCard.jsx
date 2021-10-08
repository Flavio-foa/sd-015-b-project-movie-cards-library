import React from 'react';

class MovieCard extends React.Component {
  render() {
    return(
      <div className='movie-card'>
        <img src={this.props.movie.imagePath} alt={this.props.movie.title} />
      </div>
    );
  }
}

export default MovieCard;
