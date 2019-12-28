import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CircularProgress from '@material-ui/core/CircularProgress';

import List from '../../../atoms/List';

import Repository from './Repository';

import messages from './messages';
import styles from './styles.scss';

const RepositoriesList = ({ loading, error, repos }) => (loading || (error !== false) || (repos !== false))
  ? (
    <div className={styles.wrapper}>
      {loading
        ? <div className={styles.centered}><CircularProgress /></div>
        : <List className={styles.list} items={getListItems(repos)} />
      }
    </div>
  ) : null
;

const getListItems = (repos) => (repos !== false)
  ? repos.map((repository) => <Repository repository={repository} />)
  : [<FormattedMessage {...messages.somethingWrong} />]
;

RepositoriesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
};

export default RepositoriesList;
