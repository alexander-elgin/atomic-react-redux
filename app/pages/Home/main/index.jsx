import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from '../../../state/global/selectors';

import H2 from '../../../components/H2';
import { MetaIntl, TitleIntl } from '../../../components/Helmet';

import RepositoriesList from '../RepositoriesList';
import UsernameField from '../UsernameField';

import messages from './messages';
import { loadRepos } from '../../../state/global/actions';
import { changeUsername } from '../actions';
import { makeSelectUsername } from '../selectors';
import reducer from '../reducer';
import saga from '../saga';

import styles from './styles.scss';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const repositoriesListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <TitleIntl {...messages.metaTitle} />
        <MetaIntl name="description" {...messages.metaDescription} />
        <div>
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
            <form onSubmit={this.props.onSubmitForm} className={styles.form}>
              <UsernameField
                onChange={this.props.onChangeUsername}
                value={this.props.username}
              />
            </form>
            <RepositoriesList {...repositoriesListProps} />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
