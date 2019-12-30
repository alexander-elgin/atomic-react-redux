import React from 'react';
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
  Person,
} from '@material-ui/icons';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import * as yup from 'yup';

import submitForm from '../../utils/form';
import { post } from '../../utils/request';
import Error from '../../atoms/Error';
import messages from './messages';

const SignUpForm = ({ intl }) => {
  const { push } = useHistory();

  const validationSchema = yup.object().shape({
    email: yup.string().required().email().label(intl.formatMessage(messages.email)),
    name: yup.string().required().label(intl.formatMessage(messages.name)),
    password: yup.string().required().min(8).label(intl.formatMessage(messages.password)),
  });

  return (
    <Formik
      initialValues={{ _error: '', email: '', name: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, formActions) => submitForm(
        () => post('/auth/signup', values),
        () => push('/signin'),
        intl, messages, formActions
      )}
    >
      {({ isSubmitting }) => (
        <Form>
          <Card style={{ maxWidth: 280 }}>
            {isSubmitting ? <LinearProgress /> : null}
            <CardHeader title={intl.formatMessage(messages.signUp)} />
            <CardContent>
              <ErrorMessage name="_error" component={Error} />
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    disabled={isSubmitting}
                    label={intl.formatMessage(messages.name)}
                    name="name"
                    required
                    type="text"
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><Person color="primary" /></InputAdornment>,
                    }}
                  />
                </Grid>
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
                  <Button variant="contained" type="submit" color="primary" disabled={isSubmitting}>
                    <FormattedMessage {...messages.signUp} />
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <FormattedMessage {...messages.alreadyHaveAccount} />&nbsp;
                  <Link to={'/signin'}><FormattedMessage {...messages.signIn} /></Link>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

SignUpForm.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SignUpForm);
