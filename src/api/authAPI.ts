import { AxiosResponse } from 'axios';

import {
  LoginParamsType,
  UserUpdateParamsType,
} from '../features/auth/login/types/LoginType';

import { instance } from './config';
import {
  LogoutResponse,
  UpdateUserResponseType,
  UserResponseType,
} from './types/apiType';

export const authAPI = {
  login(data: LoginParamsType) {
    return instance.post<LoginParamsType, AxiosResponse<UserResponseType>>(
      'auth/login',
      data,
    );
  },
  me() {
    return instance.post<{}, AxiosResponse<UserResponseType>>('auth/me');
  },
  logout() {
    return instance.delete<{}, AxiosResponse<LogoutResponse>>('auth/me');
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
