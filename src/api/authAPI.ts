import { LoginParamsType, UserUpdateParamsType } from '../features/login/types/LoginType';

import { instance } from './config';
import {
  LogoutResponse,
  RegisteredUserType,
  RegistrationParamsType,
  UpdateUserResponseType,
  UserResponseType,
} from './types/apiType';

export const authAPI = {
  login(params: LoginParamsType) {
    return instance.post<UserResponseType>('auth/login', params);
  },

  registration(params: RegistrationParamsType) {
    return instance.post<RegisteredUserType>('auth/register', params);
  },

  me() {
    return instance.post<UserResponseType>('auth/me');
  },

  logout() {
    return instance.delete<LogoutResponse>('auth/me');
  },
};

export const userAPI = {
  updateUser(params: UserUpdateParamsType) {
    return instance.put<UpdateUserResponseType>('auth/me', params);
  },
};
