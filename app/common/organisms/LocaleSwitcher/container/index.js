import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import LocaleSwitcher from '../component';
import { changeLocale } from '../../../../state/language/actions';
import { makeSelectLocale } from '../../../../state/language/selectors';

export const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onChange: (evt) => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);
