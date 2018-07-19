import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { changeUsername, loadRepositories } from '../../../state/github/actions';
import { setLoading } from '../../../state/loading/actions';
import { makeSelectError, makeSelectRepositories, makeSelectCurrentUsername } from '../../../state/github/selectors';
import { makeSelectLoading } from '../../../state/loading/selectors';

import HomePageComponent from '../component';

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }

      dispatch(setLoading());
      dispatch(loadRepositories());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepositories(),
  username: makeSelectCurrentUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
export default HomePageContainer;
