import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { makeSelectPageTitle } from '../../store/nav/selectors';
import setAuthenticatedProp from '../../utils/authenticated';

import LinksBlock from './LinksBlock';

const selector = createStructuredSelector({
  pageTitle: makeSelectPageTitle(),
});

const Header = ({ authenticated }) => {
  const [isOpen, setOpen] = useState(false);
  const { pageTitle } = useSelector(selector);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton color="inherit" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">
          { pageTitle }
        </Typography>
        <LinksBlock authenticated={authenticated} close={() => setOpen(false)} isOpen={isOpen} />
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  authenticated: PropTypes.bool,
};

export default setAuthenticatedProp(Header);
