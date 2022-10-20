export type FormikAuthErrorType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  rememberMe?: boolean;
};

export type FormikAuthLoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type FormikAuthLoginErrorType = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};
