import React from 'react';
import { Route, Switch } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IconContext } from "react-icons";

import DefaultTemplate from '../../../templates/default';

import NotFoundPage from '../../../pages/404-NotFound';
import HomePage from '../../../pages/Home';
import FeatureListPage from '../../../pages/FeatureList';

import SignInPage from '../../../pages/SignIn';
import SignOutPage from '../../../pages/SignOut';
import SignUpPage from '../../../pages/SignUp';

import AuthorizedRoute from '../AuthorizedRoute';
import UnauthorizedRoute from '../UnauthorizedRoute';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <Switch>
        <Route exact path="/" component={ (props) => <DefaultTemplate {...props} component={HomePage} /> } />
        <Route path="/features" component={ (props) => <DefaultTemplate {...props} component={FeatureListPage} /> } />
        <UnauthorizedRoute path="/signin" component={ (props) => <DefaultTemplate {...props} component={SignInPage} /> } />
        <UnauthorizedRoute path="/signup" component={ (props) => <DefaultTemplate {...props} component={SignUpPage} /> } />
        <Route path="/signout" component={ (props) => <DefaultTemplate {...props} component={SignOutPage} /> } />
        <Route path="" component={ (props) => <DefaultTemplate {...props} component={NotFoundPage} /> } />
      </Switch>
    </IconContext.Provider>
  </MuiThemeProvider>
);

export default App;
