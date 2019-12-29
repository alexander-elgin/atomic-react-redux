import React, { useState } from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Field, Form, Formik } from 'formik';

import messages from './messages';
import RepositoriesList from './RepositoriesList';
import styles from './styles.scss';
import H2 from '../../atoms/H2';
import Page from '../../molecules/Page';
import { get } from '../../utils/request';

const HomePage = ({ intl }) => {
  const [currentUsername, setCurrentUsername] = useState(undefined);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);

  const onSubmitForm = async ({ username }) => {
    setError(false);
    setRepos([]);

    try {
      const repositories = await get(
        `/users/${username}/repos`,
        { type: 'all', sort: 'updated' },
        'https://api.github.com'
      );

      setRepos(repositories);
      setCurrentUsername(username);
    } catch (e) {
      setError(true);
    }
  };

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
        <Formik initialValues={{ username: '' }} validate={() => ({})} onSubmit={(data) => onSubmitForm(data)}>
          {({ handleSubmit, isSubmitting, setFieldValue }) => {
            let timeout;

            const triggerSubmit = ({ target }) => {
              if (timeout !== undefined) {
                clearTimeout(timeout);
              }

              timeout = setTimeout(handleSubmit, 1500);
              setFieldValue('username', target.value);
            };

            return (
              <div>
                <Form className={styles.form}>
                  <FormattedMessage {...messages.showRepositories} />
                  <Field
                    className={styles.input}
                    disabled={isSubmitting}
                    placeholder={intl.formatMessage(messages.username)}
                    name="username"
                    type="text"
                    onChange={triggerSubmit}
                  />
                </Form>
                <RepositoriesList error={error} loading={isSubmitting} repos={repos} username={currentUsername} />
              </div>
            );
          }}
        </Formik>
      </section>
    </Page>
  );
};

HomePage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(HomePage);
