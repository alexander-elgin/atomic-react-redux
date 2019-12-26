import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import setAuthenticatedProp from '../../../utils/authenticated';

const UnauthorizedRoute = ({ authenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ location, ...props }) => authenticated ?
      <Redirect to={{ pathname: '/', state: { from: location } }} />
    :
      <Component {...props} {...rest} />
    }
  />
);

UnauthorizedRoute.propTypes = {
  authenticated: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default setAuthenticatedProp(UnauthorizedRoute);
