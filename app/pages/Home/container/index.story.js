import React from 'react';
import { storiesOf } from '@storybook/react';

import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import MainPage from './';
import configureStore from '../../../utils/store';
import githubReducer from '../../../state/github/reducer';
import loadingReducer from '../../../state/loading/reducer';

const store = configureStore({
  github: githubReducer,
  loading: loadingReducer,
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
