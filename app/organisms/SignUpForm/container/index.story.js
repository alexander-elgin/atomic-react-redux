import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SignUpForm from './';
import configureStore from '../../../utils/store';
import authReducer from '../../../store/auth/reducer';

const store = configureStore({
  auth: authReducer,
});

storiesOf('Sign Up', module)
  .addDecorator((story) => (
    <Provider store={store}>
      <IntlProvider locale="en">
        <BrowserRouter>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            {story()}
          </MuiThemeProvider>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  ))
  .add('default', () =>
    <SignUpForm handleSubmit={() => {}} onSubmit={() => {}} />
  )
;
