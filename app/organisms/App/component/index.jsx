import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'typeface-roboto';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { IconContext } from "react-icons";

import DefaultTemplate from '../../../templates/default';
import defaultTheme from '../defaultTheme';

import HomePage from '../../../pages/Home';

const App = () => (
  <MuiThemeProvider theme={defaultTheme}>
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <Switch>
        <Route exact path="/" component={ (props) => <DefaultTemplate {...props} component={HomePage} /> } />
      </Switch>
    </IconContext.Provider>
  </MuiThemeProvider>
);

export default App;
