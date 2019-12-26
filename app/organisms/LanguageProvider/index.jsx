import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocale } from '../../store/language/selectors';

const selector = createStructuredSelector({
  locale: makeSelectLocale(),
});

const LanguageProvider = ({ children, messages }) => {
  const { locale } = useSelector(selector);

  return (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
};

LanguageProvider.propTypes = {
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default LanguageProvider;
