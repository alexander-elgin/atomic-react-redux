import React from 'react';
import renderer from 'react-test-renderer';

import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import MainPage from './';
import configureStore from '../../../configureStore';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

describe('<MainPage />', () => {
  it('renders an empty main page', () => {
    expect(
      renderer.create(
        <Provider store={store}>
          <IntlProvider locale="en">
            <MainPage />
          </IntlProvider>
        </Provider>
      ).toJSON()
    ).toMatchSnapshot();
  });
});
