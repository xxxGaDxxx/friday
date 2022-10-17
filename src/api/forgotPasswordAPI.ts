import { AxiosResponse } from 'axios';

import { instance } from './config';
import { ForgotParamsType, ForgotResponseType } from './types/apiType';

export const forgotPasswordAPI = {
  forgot(data: ForgotParamsType) {
    return instance.post<ForgotParamsType, AxiosResponse<ForgotResponseType>>(
      'auth/forgot',
      data,
    );
  },
};
