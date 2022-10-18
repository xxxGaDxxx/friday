import { FormikErrorType } from '../../features/auth/login/types/LoginType';

const PASSWORD_LENGTH = 8;

export const validatePassword = (values: any): FormikErrorType => {
  const errors: FormikErrorType = {};

  if (values.password.length < PASSWORD_LENGTH) {
    errors.password = 'Length of at least 8 characters ';
  }

  return errors;
};
