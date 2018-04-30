import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../app/containers/HomePage/Input';

storiesOf('Input', module)
  .add('default', () => <Input />)
  .add('with placeholder', () => <Input placeholder="mxstbr" />)
  .add('with value', () => <Input value="username" />)
;
