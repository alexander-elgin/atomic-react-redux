import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Movie from '../Movie';

class MoviesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Grid container spacing={16} alignItems="flex-end" justify="space-between">
        {this.props.movies.map(movie => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Movie { ...movie } />
          </Grid>
        ))}
      </Grid>
    );
  }
}

MoviesList.propTypes = {
  fetch: PropTypes.func,
  movies: PropTypes.array,
};

export default MoviesList;
