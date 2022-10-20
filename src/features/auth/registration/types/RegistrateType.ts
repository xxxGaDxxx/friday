export type FormikRegistrationErrorType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type RegistrationParamsType = Omit<FormikRegistrationErrorType, 'confirmPassword'>;
