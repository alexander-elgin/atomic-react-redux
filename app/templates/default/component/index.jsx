import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 8px;
  flex-direction: column;
`;

const Template = ({ component, ...rest }) => {
  const Content = component;

  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Movies" defaultTitle="Movies">
        <meta name="description" content="Movies application" />
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
