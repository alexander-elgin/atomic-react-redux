import { defineMessages } from 'react-intl';

import {
  ERRORS_PREFIX,
  DUPLICATED_EMAIL,
  INCORRECT_CREDENTIALS,
  INVALID_EMAIL,
  INVALID_NAME,
  INVALID_PASSWORD,
} from '../../store/auth/constants';

import { FORM_SUBMISSION_FAILED } from '../../utils/form';

const messagesData = {
  alreadyHaveAccount: {
    id: 'boilerplate.organisms.SignUpForm.alreadyHaveAccount',
    defaultMessage: 'Already have an account?',
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
  name: {
    id: 'boilerplate.shared.Auth.name',
    defaultMessage: 'Name',
  },
  password: {
    id: 'boilerplate.shared.Auth.password',
    defaultMessage: 'Password',
  },
};

[
  DUPLICATED_EMAIL,
  FORM_SUBMISSION_FAILED,
  INCORRECT_CREDENTIALS,
  INVALID_EMAIL,
  INVALID_NAME,
  INVALID_PASSWORD,
].forEach((message) => {
  messagesData[message] = {
    id: `${ERRORS_PREFIX}.${message}`,
    defaultMessage: message,
  };
});

export default defineMessages(messagesData);
