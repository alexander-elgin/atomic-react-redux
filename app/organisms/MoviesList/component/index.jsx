import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InfiniteScroll from 'react-infinite-scroller';

import RawMoviesList from '../../../molecules/MoviesList';
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
        <RawMoviesList />
      </InfiniteScroll>
    );
  }
}

MoviesList.propTypes = {
  fetch: PropTypes.func,
  page: PropTypes.number,
  totalPages: PropTypes.number,
};

export default MoviesList;
