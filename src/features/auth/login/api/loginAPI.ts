import axios, { AxiosResponse } from 'axios';

import { ResponseMeAndLoginType } from '../types/LoginApiType';
import { LoginParamsType } from '../types/LoginType';

const settings = axios.create({
  baseURL: 'http://localhost:7542/2.0/',
  withCredentials: true,
});

export const loginAPI = {
  login(data: LoginParamsType) {
    return settings.post<LoginParamsType, AxiosResponse<ResponseMeAndLoginType>>(
      'auth/login',
      data,
    );
  },
  me() {
    return settings.post<AxiosResponse<ResponseMeAndLoginType>>('auth/me');
  },
  logout() {
    return settings.delete('auth/me');
  },
};
