import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

function Dropdown(props) {
  let content = (<option>--</option>);

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value) => (
      <Option key={value} value={value} message={props.messages[value]} />
    ));
  }

  return (
    <select value={props.value} onChange={props.onChange}>
      {content}
    </select>
  );
}

Dropdown.propTypes = {
  onChange: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
};

export default Dropdown;
