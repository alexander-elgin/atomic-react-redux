import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
  LinearProgress,
} from '@material-ui/core';
import {
  Email,
  Lock,
} from '@material-ui/icons';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import * as yup from 'yup';

import messages from './messages';
import Error from '../../atoms/Error';
import { setSignInData } from '../../store/auth/actions';
import { setToken } from '../../utils/auth';
import submitForm from '../../utils/form';
import { post } from '../../utils/request';

const SignInForm = ({ intl }) => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup.string().required().email().label(intl.formatMessage(messages.email)),
    password: yup.string().required().min(8).label(intl.formatMessage(messages.password)),
  });

  return (
    <Formik
      initialValues={{ _error: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, formActions) => submitForm(
        () => post('/auth/signin', values),
        ({ token, user }) => {
          dispatch(setSignInData(user));
          setToken(token);
          push('/features');
        },
        intl, messages, formActions
      )}
    >
      {({ isSubmitting }) => (
        <Form>
          <Card style={{ maxWidth: 280 }}>
            {isSubmitting ? <LinearProgress /> : null}
            <CardHeader title={intl.formatMessage(messages.signIn)} />
            <CardContent>
              <ErrorMessage name="_error" component={Error} />
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    disabled={isSubmitting}
                    label={intl.formatMessage(messages.email)}
                    name="email"
                    required
                    type="email"
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><Email color="primary" /></InputAdornment>,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    disabled={isSubmitting}
                    label={intl.formatMessage(messages.password)}
                    name="password"
                    required
                    type="password"
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><Lock color="primary" /></InputAdornment>,
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
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
        </Form>
      )}
    </Formik>
  );
};

SignInForm.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SignInForm);
