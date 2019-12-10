import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LinksBlock from '../LinksBlock';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    const { authenticated, classes } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" onClick={() => this.setState({ isOpen: true })}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.grow}>
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
