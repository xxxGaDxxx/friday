export type FormikRegistrationErrorType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  rememberMe?: boolean;
};

export type FormikLoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type FormikLoginErrorType = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};
