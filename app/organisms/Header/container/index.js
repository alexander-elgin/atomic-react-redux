import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';

import setAuthenticatedProp from '../../../utils/authenticated';
import Header from '../component';
import { makeSelectPageTitle } from '../../../store/nav/selectors';

const mapStateToProps = createStructuredSelector({
  pageTitle: makeSelectPageTitle(),
});

export default setAuthenticatedProp(injectIntl(connect(mapStateToProps, null)(Header)));
