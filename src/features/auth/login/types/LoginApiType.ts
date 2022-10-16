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
  updatedUser: UserResponseType & tokenDeathTimeType;
  token: string;
  tokenDeathTime: number;
};
type tokenDeathTimeType = {
  tokenDeathTime: number;
};
