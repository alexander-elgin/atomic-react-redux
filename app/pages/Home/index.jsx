import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { changeUsername, loadRepositories } from '../../store/github/actions';
import { makeSelectError, makeSelectRepositories, makeSelectCurrentUsername } from '../../store/github/selectors';
import { setLoading } from '../../store/loading/actions';
import { makeSelectLoading } from '../../store/loading/selectors';

import H2 from '../../atoms/H2';
import Page from '../../molecules/Page';

import RepositoriesList from './RepositoriesList';
import UsernameField from './UsernameField';

import messages from './messages';

import styles from './styles.scss';

const selector = createStructuredSelector({
  repos: makeSelectRepositories(),
  username: makeSelectCurrentUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const HomePage = () => {
  const { error, loading, repos, username } = useSelector(selector);
  const repositoriesListProps = { loading, error, repos };
  const dispatch = useDispatch();

  const onSubmitForm = (evt) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }

    dispatch(setLoading());
    dispatch(loadRepositories());
  };

  useEffect(() => {
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }, []);

  return (
    <Page title={messages.metaTitle} description={messages.metaDescription}>
      <section className={styles['centered-section']}>
        <H2>
          <FormattedMessage {...messages.startProjectHeader} />
        </H2>
        <p>
          <FormattedMessage {...messages.startProjectMessage} />
        </p>
      </section>
      <section className={styles.section}>
        <H2>
          <FormattedMessage {...messages.trymeHeader} />
        </H2>
        <form onSubmit={onSubmitForm} className={styles.form}>
          <UsernameField onChange={({ target }) => dispatch(changeUsername(target.value))} value={username} />
        </form>
        <RepositoriesList {...repositoriesListProps} />
      </section>
    </Page>
  );
};

export default HomePage;
