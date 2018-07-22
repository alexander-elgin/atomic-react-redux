import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DefaultTemplate from '../../../templates/default';

import NotFoundPage from '../../../pages/404-NotFound';
import HomePage from '../../../pages/Home';
import FeatureListPage from '../../../pages/FeatureList';

const App = () => (
  <Switch>
    <Route exact path="/" component={ (props) => <DefaultTemplate {...props} component={HomePage} /> } />
    <Route path="/features" component={ (props) => <DefaultTemplate {...props} component={FeatureListPage} /> } />
    <Route path="" component={ (props) => <DefaultTemplate {...props} component={NotFoundPage} /> } />
  </Switch>
);

export default App;
