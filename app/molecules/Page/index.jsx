import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { useDispatch } from 'react-redux';

import { MetaIntl, TitleIntl } from '../Helmet';
import { setPageTitle as setPageTitleAction } from '../../store/nav/actions';

const Page = ({ children, description, intl, title }) => {
  const dispatch = useDispatch();
  const setPageTitle = (pageTitle) => dispatch(setPageTitleAction(pageTitle));

  useEffect(() => {
    setPageTitle(intl.formatMessage(title));
  }, []);

  return (
    <div>
      <TitleIntl {...title} />
      {description === undefined ? null : <MetaIntl name="description" {...description} />}
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  description: PropTypes.object,
  intl: intlShape.isRequired,
  title: PropTypes.object,
};

export default injectIntl(Page);
