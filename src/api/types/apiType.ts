// login type
export type UserResponseType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
};

export type UpdateUserResponseType = {
  updatedUser: UserResponseType & TokenDeathTimeType;
  token: string;
  tokenDeathTime: number;
};
type TokenDeathTimeType = {
  tokenDeathTime: number;
};

export type LogoutResponse = {
  info?: string;
  error?: string;
};

// forgot type
export type ForgotParamsType = {
  email: string;
  from: string;
  message: string;
};

export type ForgotResponseType = {
  info?: string;
  error?: string;
  success: boolean;
};

export type NewPasswordType = {
  password: string;
  resetPasswordToken: string;
};

export type NewPasswordResponseType = {
  info?: string;
  error?: string;
};

// registration
export type RegisteredUserType = {
  addedUser: UserResponseType;
  error?: string;
};

export type RegistrationParamsType = {
  email: string;
  password: string;
};
