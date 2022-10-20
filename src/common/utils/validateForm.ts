import { FormikErrorType } from './types/ValidateFormTypes';

const PASSWORD_LENGTH = 8;

export const validatePassword = (values: { password: string }): FormikErrorType => {
  const errors: FormikErrorType = {};

  if (values.password.length < PASSWORD_LENGTH) {
    errors.password = 'Length of at least 8 characters ';
  }

  return errors;
};

export const validateEmail = (values: { email: string }): FormikErrorType => {
  const errors: FormikErrorType = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};
