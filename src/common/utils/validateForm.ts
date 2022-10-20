import {
  FormikAuthErrorType,
  FormikAuthLoginErrorType,
  FormikAuthLoginType,
} from './types/ValidateFormTypes';

const PASSWORD_LENGTH = 8;

export const validatePassword = (values: FormikAuthErrorType): FormikAuthErrorType => {
  const errors: FormikAuthErrorType = {};

  if (!values.password) {
    errors.password = '😎 Enter your password!';
  } else if (values.password.length < PASSWORD_LENGTH) {
    errors.password = '😎 Length of at least 8 characters';
  }

  return errors;
};

export const validateEmail = (values: FormikAuthErrorType): FormikAuthErrorType => {
  const errors: FormikAuthErrorType = {};

  if (!values.email) {
    errors.email = '😎 E-mail required!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '😔 Invalid email address';
  }

  return errors;
};

export const validateAuthForm = (values: FormikAuthErrorType): FormikAuthErrorType => {
  let errors: FormikAuthErrorType = {};

  errors = { ...errors, ...validateEmail(values) };

  errors = { ...errors, ...validatePassword(values) };

  if (!values.confirmPassword) {
    errors.confirmPassword = '😎 Confirm your password!';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = '😔 Passwords do not match!';
  }

  return errors;
};

export const validateAuthLoginForm = (
  values: FormikAuthLoginType,
): FormikAuthLoginErrorType => {
  let errors: FormikAuthLoginErrorType = {};

  errors = { ...errors, ...validateEmail(values) };

  errors = { ...errors, ...validatePassword(values) };

  return errors;
};
