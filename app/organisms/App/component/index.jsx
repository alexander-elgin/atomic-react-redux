import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'typeface-roboto';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { IconContext } from "react-icons";

import DefaultTemplate from '../../../templates/default';
import defaultTheme from '../defaultTheme';

import HomePage from '../../../pages/Home';
import MoviePage from '../../../pages/Movie';

const App = () => (
  <MuiThemeProvider theme={defaultTheme}>
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <Switch>
        <Route exact path="/" component={ (props) => <DefaultTemplate {...props} component={HomePage} /> } />
        <Route path="/movie/:movieId" component={ (props) => <DefaultTemplate {...props} component={MoviePage} /> } />
      </Switch>
    </IconContext.Provider>
  </MuiThemeProvider>
);

export default App;
