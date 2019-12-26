import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { signOut } from '../../store/auth/actions';

import messages from './messages';

const SignOut = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOut());
  }, []);

  return (
    <p><FormattedMessage {...messages.signOutMessage} />...</p>
  );
};

export default SignOut;
