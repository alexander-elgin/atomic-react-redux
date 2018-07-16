import React from 'react';
import { storiesOf } from '@storybook/react';

import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import MainPage from './';
import configureStore from '../../../utils/store';
import githubReducer from '../../../state/github/reducer';
import globalReducer from '../../../state/global/reducer';

const store = configureStore({
  github: githubReducer,
  global: globalReducer,
});

storiesOf('MainPage', module)
  .addDecorator((story) => (
    <Provider store={store}>
      <IntlProvider locale="en">
        {story()}
      </IntlProvider>
    </Provider>
  ))
  .add('default', () => <MainPage />)
;
