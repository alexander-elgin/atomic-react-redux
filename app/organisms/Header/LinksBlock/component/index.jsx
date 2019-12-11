import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  MdDeveloperBoard,
  MdExitToApp,
  MdHome,
  MdPersonAdd,
  MdPowerSettingsNew,
} from 'react-icons/md';

import messages from './messages';

const getLinksData = (authenticated) => {
  const linksData = [
    {
      icon: MdHome,
      text: messages.home,
      uri: '/',
    },
    {
      icon: MdDeveloperBoard,
      text: messages.features,
      uri: '/features',
    },
  ];

  if (authenticated) {
    linksData.push({
      icon: MdPowerSettingsNew,
      text: messages.signOut,
      uri: '/signOut',
    });
  } else {
    [
      {
        icon: MdExitToApp,
        text: messages.signIn,
        uri: '/signin',
      },
      {
        icon: MdPersonAdd,
        text: messages.signUp,
        uri: '/signup',
      },
    ].forEach((linkData) => linksData.push(linkData));
  }

  return linksData;
};

const LinksBlock = ({ authenticated, close, isOpen, location }) => (
  <Drawer open={isOpen} onClose={close}>
    <div tabIndex={0} role="button" onClick={close} onKeyDown={close}>
      <List>
        {getLinksData(authenticated).map(({ icon: Icon, text, uri }) => (
          <ListItem button component={Link} to={uri} key={uri} disabled={uri === location.pathname}>
            <ListItemIcon><Icon /></ListItemIcon>
            <ListItemText><FormattedMessage {...text} /></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  </Drawer>
);

LinksBlock.propTypes = {
  authenticated: PropTypes.bool,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  location: PropTypes.object.isRequired,
};

export default LinksBlock;
