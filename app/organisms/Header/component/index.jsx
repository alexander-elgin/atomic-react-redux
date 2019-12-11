import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LinksBlock from '../LinksBlock';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    const { authenticated, pageTitle } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          <IconButton color="inherit" onClick={() => this.setState({ isOpen: true })}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">
            { pageTitle }
          </Typography>
          <LinksBlock
            authenticated={authenticated}
            close={() => this.setState({ isOpen: false })}
            isOpen={this.state.isOpen}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool,
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
