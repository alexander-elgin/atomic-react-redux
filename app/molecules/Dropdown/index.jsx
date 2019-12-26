import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

const Dropdown = ({ onChange, value: currentValue, values }) => (
  <select value={currentValue} onChange={onChange}>
    {
      values ? Object.keys(values).map((value) => (
        <Option key={value} value={value} message={values[value]} />
      )) : <option>--</option>
    }
  </select>
);

Dropdown.propTypes = {
  onChange: PropTypes.func,
  values: PropTypes.object,
  value: PropTypes.string,
};

export default Dropdown;
