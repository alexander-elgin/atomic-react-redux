import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setError } from '../../../store/movies/actions';
import { makeSelectError } from '../../../store/movies/selectors';

import ErrorNotificationComponent from '../component';

export function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch(setError(null)),
  };
}

const mapStateToProps = createStructuredSelector({
  open: makeSelectError(),
});

const ErrorNotificationContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorNotificationComponent);
export default ErrorNotificationContainer;
