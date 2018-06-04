import React from 'react';
import { storiesOf } from '@storybook/react';

import { IntlProvider } from 'react-intl';

import FeatureListPage from './main';

storiesOf('FeatureListPage', module)
  .addDecorator((story) => (
    <IntlProvider locale="en">
      {story()}
    </IntlProvider>
  ))
  .add('default', () => <FeatureListPage />)
;
