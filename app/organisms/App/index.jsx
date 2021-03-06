import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'typeface-roboto';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import DefaultTemplate from '../../templates/default';
import defaultTheme from './defaultTheme';

import NotFoundPage from '../../pages/404-NotFound';
import HomePage from '../../pages/Home';
import FeatureListPage from '../../pages/FeatureList';

import SignInPage from '../../pages/SignIn';
import SignOutPage from '../../pages/SignOut';
import SignUpPage from '../../pages/SignUp';

import AuthorizedRoute from './AuthorizedRoute';
import UnauthorizedRoute from './UnauthorizedRoute';
import GlobalStyles from './global-styles';

const App = () => (
  <MuiThemeProvider theme={defaultTheme}>
    <Switch>
      <Route exact path="/" component={(props) => <DefaultTemplate {...props} component={HomePage} />} />
      <Route path="/features" component={(props) => <DefaultTemplate {...props} component={FeatureListPage} />} />
      <UnauthorizedRoute path="/signin" component={(props) => <DefaultTemplate {...props} component={SignInPage} />} />
      <UnauthorizedRoute path="/signup" component={(props) => <DefaultTemplate {...props} component={SignUpPage} />} />
      <AuthorizedRoute path="/signout" component={(props) => <DefaultTemplate {...props} component={SignOutPage} />} />
      <Route path="" component={(props) => <DefaultTemplate {...props} component={NotFoundPage} />} />
    </Switch>
    <GlobalStyles />
  </MuiThemeProvider>
);

export default App;
