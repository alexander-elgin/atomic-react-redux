import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles.scss';

const LoadingIndicator = () => (
  <div className={styles['centered-wrapper']}>
    <CircularProgress />
  </div>
);

export default LoadingIndicator;
