import React from 'react';

import Page from '../../molecules/Page';
import SignUpForm from '../../organisms/SignUpForm';
import messages from './messages';

const SignUpPage = () => (
  <Page title={messages.metaTitle}>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <SignUpForm />
    </div>
  </Page>
);

export default SignUpPage;
