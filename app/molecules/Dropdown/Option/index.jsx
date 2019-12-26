import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ value, message }) => <option value={value}>{message || value}</option>;

Option.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default Option;
