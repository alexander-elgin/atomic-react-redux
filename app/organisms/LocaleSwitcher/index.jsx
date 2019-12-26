import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { changeLocale } from '../../store/language/actions';
import { makeSelectLocale } from '../../store/language/selectors';

import { appLocales } from '../../i18n';
import Dropdown from '../../molecules/Dropdown';

import messages from './messages';

const selector = createStructuredSelector({
  locale: makeSelectLocale(),
});

const LocaleSwitcher = () => {
  const { locale } = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <Dropdown
      value={locale}
      values={appLocales}
      messages={messages}
      onChange={({ target }) => dispatch(changeLocale(target.value))}
    />
  );
};

export default LocaleSwitcher;
