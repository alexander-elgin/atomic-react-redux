import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '../../atoms/H1';
import List from '../../atoms/List';
import Page from '../../molecules/Page';

import Feature from './Feature';
import messages from './messages';

import styles from './styles.scss';

const featuresData = [
  {
    header: messages.scaffoldingHeader,
    description: messages.scaffoldingMessage,
  },
  {
    header: messages.scaffoldingHeader,
    description: messages.scaffoldingMessage,
  },
  {
    header: messages.feedbackHeader,
    description: messages.feedbackMessage,
  },
  {
    header: messages.routingHeader,
    description: messages.routingMessage,
  },
  {
    header: messages.networkHeader,
    description: messages.networkMessage,
  },
  {
    header: messages.intlHeader,
    description: messages.intlMessage,
  },
];

const FeatureList = () => (
  <Page title={messages.metaTitle} description={messages.metaDescription}>
    <H1>
      <FormattedMessage {...messages.header} />
    </H1>
    <List className={styles.list} items={featuresData.map((featureData) => <Feature {...featureData} />)} />
  </Page>
);

export default FeatureList;
