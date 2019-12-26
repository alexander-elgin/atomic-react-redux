import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Title = ({ content }) => (
  <Helmet>
    <title>{ content }</title>
  </Helmet>
);

Title.propTypes = {
  content: PropTypes.string,
};

export default Title;
