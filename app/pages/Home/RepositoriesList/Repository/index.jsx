import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import IssueIcon from './IssueIcon';
import IssuesLink from './IssuesLink';
import RepositoryLink from './RepositoryLink';
import styles from './styles.scss';

export const Repository = ({ repository, username }) => (
  <div className={styles.wrapper}>
    <RepositoryLink href={repository.html_url} target="_blank">
      {repository.owner.login === username ? repository.name : repository.full_name}
    </RepositoryLink>
    <IssuesLink href={`${repository.html_url}/issues`} target="_blank">
      <IssueIcon className={styles.icon} />
      <FormattedNumber value={repository.open_issues_count} />
    </IssuesLink>
  </div>
);

Repository.propTypes = {
  repository: PropTypes.object,
  username: PropTypes.string,
};

export default Repository;
