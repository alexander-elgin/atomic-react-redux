import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setError } from '../../../store/movies/actions';
import { get } from '../../../utils/request';
import { apiKey } from '../../../env';

import MoviePage from '../component';

class MoviePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      movies: [],
    };
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const params = { api_key: apiKey };

    get(`/movie/${movieId}`, params).then(
      (movie) => this.setState({ movie }),
      (err) => this.props.setError(err)
    );

    get(`/movie/${movieId}/recommendations`, params).then(
      (moviesData) => this.setState({ movies: moviesData.results }),
      (err) => this.props.setError(err)
    );
  }

  render() {
    return (
      <MoviePage movie={this.state.movie} movies={this.state.movies} />
    );
  }
}

MoviePageComponent.propTypes = {
  setError: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    setError: (e) => dispatch(setError(e)),
  };
}

const MoviePageContainer = connect(null, mapDispatchToProps)(MoviePageComponent);
export default MoviePageContainer;
