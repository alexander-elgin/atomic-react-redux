import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import NotFoundPage from '../../pages/404-NotFound';
import HomePage from '../../pages/Home';
import FeatureListPage from '../../pages/FeatureList';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeatureListPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
