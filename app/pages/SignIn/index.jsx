import React from 'react';

import Page from '../../molecules/Page';
import SignInForm from '../../organisms/SignInForm';
import messages from './messages';

const SignInPage = () => (
  <Page title={messages.metaTitle}>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <SignInForm />
    </div>
  </Page>
);

export default SignInPage;
