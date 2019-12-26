import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Meta = ({ content, name }) => (
  <Helmet>
    <meta name={name} content={content} />
  </Helmet>
);

Meta.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
};

export default Meta;
