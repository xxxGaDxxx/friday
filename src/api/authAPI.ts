import { AxiosResponse } from 'axios';

import { LoginParamsType, UserUpdateParamsType } from '../features/auth/login/types/LoginType';

import { instance } from './config';
import {
  LogoutResponse,
  RegisteredUserType,
  RegistrationParamsType,
  UpdateUserResponseType,
  UserResponseType,
} from './types/apiType';

export const authAPI = {
  login(data: LoginParamsType) {
    return instance.post<LoginParamsType, AxiosResponse<UserResponseType>>('auth/login', data);
  },
  registration(data: RegistrationParamsType) {
    return instance.post<RegistrationParamsType, AxiosResponse<RegisteredUserType>>(
      'auth/register',
      data,
    );
  },
  me() {
    return instance.post<UserResponseType>('auth/me');
  },
  logout() {
    return instance.delete<LogoutResponse>('auth/me');
  },
};

export const userAPI = {
  updateUser(data: UserUpdateParamsType) {
    return instance.put<UserUpdateParamsType, AxiosResponse<UpdateUserResponseType>>(
      'auth/me',
      data,
    );
  },
};
