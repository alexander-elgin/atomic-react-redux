import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.scss';

const UsernameField = ({value, onChange}) => (
  <label htmlFor="username">
    <FormattedMessage {...messages.showRepositories} />
    <span className={styles.prefix}><FormattedMessage {...messages.atPrefix} /></span>
    <input className={styles.input} id="username" type="text" placeholder="username" value={value} onChange={onChange} />
  </label>
);

UsernameField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};
/* istanbul ignore next*/
UsernameField.defaultProps = {
  onChange: () => {}
};

export default UsernameField;
