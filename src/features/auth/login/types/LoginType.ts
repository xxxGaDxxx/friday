export type FormikErrorType = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};

export type LoginParamsType = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};

export type UserUpdateParamsType = {
  name: string;
  avatar: string;
};
