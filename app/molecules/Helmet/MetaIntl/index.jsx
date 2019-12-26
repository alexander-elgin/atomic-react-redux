import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Meta from './Meta';

const MetaIntl = ({ name, ...rest }) => (
  <FormattedMessage {...rest}>
    {(content) => <Meta content={content} name={name} />}
  </FormattedMessage>
);

MetaIntl.propTypes = {
  name: PropTypes.string,
};

export default MetaIntl;
