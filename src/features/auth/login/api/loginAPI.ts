import axios, { AxiosResponse } from 'axios';

import { UpdateUserResponseType, UserResponseType } from '../types/LoginApiType';
import { LoginParamsType, UserUpdateParamsType } from '../types/LoginType';

const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/',
  withCredentials: true,
});

export const loginAPI = {
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
    return instance.delete('auth/me');
  },
  updateUser(data: UserUpdateParamsType) {
    return instance.put<UserUpdateParamsType, AxiosResponse<UpdateUserResponseType>>(
      'auth/me',
      data,
    );
  },
};
