/*
 * Feature List Page
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from '../../components/H1';
import List from '../../components/List';

import Feature from './Feature';
import messages from './messages';

import styles from './styles.scss';

export default class FeatureList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }

  render() {
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

    const features = featuresData.map((featureData) => (
      <Feature
        header={<FormattedMessage {...featureData.header} />}
        description={<FormattedMessage {...featureData.description} />}
      />
    ));

    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <List className={styles.list} items={features} />
      </div>
    );
  }
}
