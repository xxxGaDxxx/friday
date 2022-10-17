import axios, { AxiosResponse } from 'axios';

import { ForgotParamsType, ForgotResponseType } from './types/apiType';

export const instanceHeroku = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0',
  withCredentials: true,
});

export const forgotPasswordAPI = {
  forgot(data: ForgotParamsType) {
    return instanceHeroku.post<ForgotParamsType, AxiosResponse<ForgotResponseType>>(
      'auth/forgot',
      data,
    );
  },
};
