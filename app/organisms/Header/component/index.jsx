import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';

import A from '../A';
import Img from '../Img';
import NavBar from '../NavBar';
import HeaderLink from '../HeaderLink';

import Banner from './banner.jpg';
import messages from './messages';
import LinksBlock from '../LinksBlock';

const Header = ({ authenticated, intl }) => (
  <div>
    <LinksBlock authenticated={authenticated} />
    <A href="https://github.com/alexander-elgin/react-redux-passport-boilerplate">
      <Img src={Banner} alt={intl.formatMessage(messages.logo)} />
    </A>
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
  intl: intlShape.isRequired,
};

export default Header;
