import React from 'react';
import { storiesOf } from '@storybook/react';

import Feature from './';

storiesOf('Feature', module)
  .add('default', () => <Feature description="feature description" header="Feature Header" />)
;
