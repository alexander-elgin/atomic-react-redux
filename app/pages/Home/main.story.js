import React from 'react';
import { storiesOf } from '@storybook/react';

import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import MainPage from './main';
import configureStore from '../../configureStore';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

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
