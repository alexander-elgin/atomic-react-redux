import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form/immutable';
import { FormattedMessage, intlShape } from 'react-intl';

import Error from '../../../atoms/Error'
import messages from './messages';

const SignUpForm = ({ error, intl, handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <h2 className="card-heading">
      <FormattedMessage {...messages.signUp} />
    </h2>
    <Error>{error}</Error>

    <div className="field-line">
      <Field component={TextField} floatingLabelText={intl.formatMessage(messages.name)} name="name" type="text" />
    </div>

    <div className="field-line">
      <Field component={TextField} floatingLabelText={intl.formatMessage(messages.email)} name="email" type="email" />
    </div>

    <div className="field-line">
      <Field component={TextField} floatingLabelText={intl.formatMessage(messages.password)} name="password" type="password" />
    </div>

    <div className="button-line">
      <RaisedButton type="submit" label={intl.formatMessage(messages.signUp)} backgroundColor="#41ADDD" labelColor="#ffffff" />
    </div>

    <CardText>
      <FormattedMessage {...messages.alreadyHaveAccount} /> <Link to={'/signin'}><FormattedMessage {...messages.signIn} /></Link>
    </CardText>
  </form>
);

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default SignUpForm;
