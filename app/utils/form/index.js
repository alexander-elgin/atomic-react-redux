export const FORM_SUBMISSION_FAILED = 'FORM_SUBMISSION_FAILED';

export default async function (submitRequest, setData, intl, messages, { resetForm, setErrors, setSubmitting }) {
  setErrors({});
  setSubmitting(true);

  try {
    const authData = await submitRequest();
    setSubmitting(false);

    if (authData.errors === undefined) {
      resetForm({});
      setData(authData.payload);
    } else {
      setErrors(Object.keys(authData.errors).reduce((errors, field) => Object.assign(errors, {
        [field === '' ? '_error' : field]: intl.formatMessage(messages[authData.errors[field].code]),
      }), {}));
    }
  } catch (err) {
    setErrors({ _error: intl.formatMessage(messages[FORM_SUBMISSION_FAILED]) });
  }
}
