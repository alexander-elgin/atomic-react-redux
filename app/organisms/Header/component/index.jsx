import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import NavBar from '../NavBar';
import HeaderLink from '../HeaderLink';

import messages from './messages';
import LinksBlock from '../LinksBlock';

const Header = ({ authenticated }) => (
  <div>
    <LinksBlock authenticated={authenticated} />
    <NavBar>
      <HeaderLink to="/">
        <FormattedMessage {...messages.home} />
      </HeaderLink>
      <HeaderLink to="/features">
        <FormattedMessage {...messages.features} />
      </HeaderLink>
    </NavBar>
  </div>
);

Header.propTypes = {
  authenticated: PropTypes.bool,
};

export default Header;
