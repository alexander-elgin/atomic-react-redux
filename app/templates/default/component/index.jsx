import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const Template = ({ component, ...rest }) => {
  const Content = component;

  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Pokemons" defaultTitle="Pokemons">
        <meta name="description" content="Pokemons application" />
      </Helmet>
      <Content {...rest} />
    </AppWrapper>
  );
};

Template.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default Template;
