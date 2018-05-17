import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const List = ({items}) => (
  <ul className={styles.list}>
    {items.map((item, key) => <li key={key}>{item}</li>)}
  </ul>
);

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
