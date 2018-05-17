import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './';

storiesOf('Input', module)
  .add('default', () => <List items={['item 1']} />)
;
