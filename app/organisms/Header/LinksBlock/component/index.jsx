import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  DeveloperBoard,
  ExitToApp,
  Home,
  PersonAdd,
  PowerSettingsNew,
} from '@material-ui/icons';

import messages from './messages';

const getLinksData = (authenticated) => {
  const linksData = [
    {
      icon: Home,
      text: messages.home,
      uri: '/',
    },
    {
      icon: DeveloperBoard,
      text: messages.features,
      uri: '/features',
    },
  ];

  if (authenticated) {
    linksData.push({
      icon: PowerSettingsNew,
      text: messages.signOut,
      uri: '/signOut',
    });
  } else {
    [
      {
        icon: ExitToApp,
        text: messages.signIn,
        uri: '/signin',
      },
      {
        icon: PersonAdd,
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
