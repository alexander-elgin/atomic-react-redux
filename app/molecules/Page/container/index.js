import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import { setPageTitle } from '../../../store/nav/actions';

import Component from '../component';

export function mapDispatchToProps(dispatch) {
  return {
    setPageTitle: (title) => dispatch(setPageTitle(title)),
  };
}

export default injectIntl(connect(null, mapDispatchToProps)(Component));
