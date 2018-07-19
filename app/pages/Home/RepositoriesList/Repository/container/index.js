import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectSelectedUsername } from '../../../../../state/github/selectors';

import Repository from '../component';

export default connect(createStructuredSelector({
  currentUser: makeSelectSelectedUsername(),
}))(Repository);
