import React from 'react';
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';

import { MetaIntl, TitleIntl } from '../../Helmet';

class Page extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { intl, setPageTitle, title } = this.props;
    setPageTitle(intl.formatMessage(title));
  }

  render() {
    return (
      <div>
        <TitleIntl {...this.props.title} />
        {this.props.description === undefined ? null : <MetaIntl name="description" {...this.props.description} />}
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
  description: PropTypes.object,
  intl: intlShape.isRequired,
  setPageTitle: PropTypes.func,
  title: PropTypes.object,
};

export default Page;
