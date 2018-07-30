import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectIsAuthenticated } from '../../state/auth/selectors';

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectIsAuthenticated(),
});

const setAuthenticatedProp = (Component) => connect(mapStateToProps, null)(Component);
export default setAuthenticatedProp;
