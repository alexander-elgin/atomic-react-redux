import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CircularProgress from '@material-ui/core/CircularProgress';

import List from '../../../atoms/List';

import Repository from './Repository';

import messages from './messages';
import styles from './styles.scss';

const RepositoriesList = ({ loading, error, repos, username }) => (loading || (error !== false) || (repos.length > 0))
  ? (
    <div className={styles.wrapper}>
      {loading
        ? <div className={styles.centered}><CircularProgress /></div>
        : <List className={styles.list} items={getListItems(repos, username)} />
      }
    </div>
  ) : null
;

const getListItems = (repos, username) => (repos.length > 0)
  ? repos.map((repository) => <Repository repository={repository} username={username} />)
  : [<FormattedMessage {...messages.somethingWrong} />]
;

RepositoriesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
  username: PropTypes.string,
};

export default RepositoriesList;
