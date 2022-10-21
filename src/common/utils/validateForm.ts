import {
  FormikRegistrationErrorType,
  FormikLoginErrorType,
  FormikLoginType,
} from './types/ValidateFormTypes';

const PASSWORD_LENGTH = 8;

export const validatePassword = (
  values: FormikRegistrationErrorType,
): FormikRegistrationErrorType => {
  const errors: FormikRegistrationErrorType = {};

  if (!values.password) {
    errors.password = '😎 Enter your password!';
  } else if (values.password.length < PASSWORD_LENGTH) {
    errors.password = '😎 Length of at least 8 characters';
  }

  return errors;
};

export const validateEmail = (
  values: FormikRegistrationErrorType,
): FormikRegistrationErrorType => {
  const errors: FormikRegistrationErrorType = {};

  if (!values.email) {
    errors.email = '😎 E-mail required!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '😔 Invalid email address';
  }

  return errors;
};

export const validateRegistrationForm = (
  values: FormikRegistrationErrorType,
): FormikRegistrationErrorType => {
  let errors: FormikRegistrationErrorType = {};

  errors = { ...errors, ...validateEmail(values) };

  errors = { ...errors, ...validatePassword(values) };

  if (!values.confirmPassword) {
    errors.confirmPassword = '😎 Confirm your password!';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = '😔 Passwords do not match!';
  }

  return errors;
};

export const validateLoginForm = (values: FormikLoginType): FormikLoginErrorType => {
  let errors: FormikLoginErrorType = {};

  errors = { ...errors, ...validateEmail(values) };

  errors = { ...errors, ...validatePassword(values) };

  return errors;
};
