import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import setAuthenticatedProp from '../../../utils/authenticated';

const AuthorizedRoute = ({ authenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ location, ...props }) => authenticated ?
      <Component {...props} {...rest} />
    :
      <Redirect to={{ pathname: '/', state: { from: location } }} />
    }
  />
);

AuthorizedRoute.propTypes = {
  authenticated: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default setAuthenticatedProp(AuthorizedRoute);
