import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  const {items, ...rest} = props;

  return (
    <ul {...rest}>
      {items.map((item, key) => <li key={key}>{item}</li>)}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
