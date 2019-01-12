import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InfiniteScroll from 'react-infinite-scroller';

import Movie from '../Movie';
import LoadingIndicator from '../../../molecules/LoadingIndicator';

class MoviesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <InfiniteScroll
        pageStart={1}
        loadMore={this.props.fetch}
        hasMore={this.props.page < this.props.totalPages}
        loader={<LoadingIndicator />}
      >
        <Grid container spacing={16} alignItems="flex-end" justify="space-between">
          {this.props.movies.map(movie => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <Movie { ...movie } />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    );
  }
}

MoviesList.propTypes = {
  fetch: PropTypes.func,
  movies: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number,
};

export default MoviesList;
