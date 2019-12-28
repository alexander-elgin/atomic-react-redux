import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

import { signOut } from '../../store/auth/actions';
import { removeToken } from '../../utils/auth';

import messages from './messages';

const SignOut = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  useEffect(() => {
    dispatch(signOut());
    removeToken();
    push('/');
  }, []);

  return (
    <p><FormattedMessage {...messages.signOutMessage} />...</p>
  );
};

export default SignOut;
