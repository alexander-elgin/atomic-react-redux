/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '../../atoms/H1';
import Page from '../../molecules/Page';
import messages from './messages';

export default function NotFound() {
  return (
    <Page title={messages.header}>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </Page>
  );
}
