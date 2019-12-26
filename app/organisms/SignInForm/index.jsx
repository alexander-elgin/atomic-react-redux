import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
} from '@material-ui/core';
import {
  Email,
  Lock,
} from '@material-ui/icons';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import { SIGN_IN_FORM } from '../../store/auth/constants';
import { submitSignInRequest } from '../../store/auth/actions';

import Error from '../../atoms/Error';
import messages from './messages';

const SignInForm = ({ error, intl, handleSubmit }) => {
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={handleSubmit((values) => dispatch(submitSignInRequest(values.toJS(), intl, messages)))}
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Card style={{ maxWidth: 280 }}>
        <CardHeader title={intl.formatMessage(messages.signIn)} />
        <CardContent>
          <Error>{error}</Error>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Field
                component={TextField}
                label={intl.formatMessage(messages.email)}
                name="email"
                type="email"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Email color="primary" /></InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                label={intl.formatMessage(messages.password)}
                name="password"
                type="password"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Lock color="primary" /></InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                <FormattedMessage {...messages.signIn} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <FormattedMessage {...messages.noAccount} />&nbsp;
              <Link to={'/signup'}><FormattedMessage {...messages.signUp} /></Link>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </form>
  );
};

SignInForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  intl: intlShape.isRequired,
};

export default reduxForm({
  form: SIGN_IN_FORM,
})(injectIntl(SignInForm));
