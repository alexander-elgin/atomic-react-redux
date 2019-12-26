import React from 'react';

import Page from '../../molecules/Page';
import SignUpForm from '../../organisms/SignUpForm';
import messages from './messages';

const SignUpPage = () => (
  <Page title={messages.metaTitle}>
    <SignUpForm />
  </Page>
);

export default SignUpPage;
