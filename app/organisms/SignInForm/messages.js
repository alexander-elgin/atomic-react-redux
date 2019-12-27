import { defineMessages } from 'react-intl';

import {
  ERRORS_PREFIX,
  EMPTY_PASSWORD,
  INCORRECT_CREDENTIALS,
  INVALID_EMAIL,
} from '../../store/auth/constants';

import { FORM_SUBMISSION_FAILED } from '../../utils/form';

const messagesData = {
  noAccount: {
    id: 'boilerplate.organisms.SignInForm.noAccount',
    defaultMessage: 'Don\'t have an account?',
  },
  signIn: {
    id: 'boilerplate.shared.Auth.signIn',
    defaultMessage: 'Sign in',
  },
  signUp: {
    id: 'boilerplate.shared.Auth.signUp',
    defaultMessage: 'Sign up',
  },
  email: {
    id: 'boilerplate.shared.Auth.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'boilerplate.shared.Auth.password',
    defaultMessage: 'Password',
  },
};

[
  EMPTY_PASSWORD,
  FORM_SUBMISSION_FAILED,
  INCORRECT_CREDENTIALS,
  INVALID_EMAIL,
].forEach((message) => {
  messagesData[message] = {
    id: `${ERRORS_PREFIX}.${message}`,
    defaultMessage: message,
  };
});

export default defineMessages(messagesData);
