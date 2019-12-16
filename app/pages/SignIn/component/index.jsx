import React from 'react';

import Page from '../../../molecules/Page';
import SignInForm from '../../../organisms/SignInForm';
import messages from './messages';

const SignInPage = () => (
  <Page title={messages.metaTitle}>
    <SignInForm />
  </Page>
);

export default SignInPage;
