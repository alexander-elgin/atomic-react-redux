import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Feature = ({description, header}) => (
  <div>
    <p className={styles['feature-header']}>{header}</p>
    <p className={styles['feature-description']}>{description}</p>
  </div>
);

Feature.propTypes = {
  description: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired
};

export default Feature;
