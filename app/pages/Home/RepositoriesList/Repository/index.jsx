import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectSelectedUsername } from '../../../../store/github/selectors';

import IssueIcon from './IssueIcon';
import IssuesLink from './IssuesLink';
import RepositoryLink from './RepositoryLink';

import styles from './styles.scss';

const selector = createStructuredSelector({
  currentUser: makeSelectSelectedUsername(),
});

export const Repository = ({ repository }) => {
  const { currentUser } = useSelector(selector);

  return (
    <div className={styles.wrapper}>
      <RepositoryLink href={repository.html_url} target="_blank">
        {repository.owner.login === currentUser ? repository.name : repository.full_name}
      </RepositoryLink>
      <IssuesLink href={`${repository.html_url}/issues`} target="_blank">
        <IssueIcon className={styles.icon} />
        <FormattedNumber value={repository.open_issues_count} />
      </IssuesLink>
    </div>
  );
};

Repository.propTypes = {
  repository: PropTypes.object,
};

export default Repository;
