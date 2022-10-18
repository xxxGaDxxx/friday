import { AxiosResponse } from 'axios';

import { instance } from './config';
import {
  ForgotParamsType,
  ForgotResponseType,
  NewPasswordResponseType,
  NewPasswordType,
} from './types/apiType';

export const forgotPasswordAPI = {
  forgot(data: ForgotParamsType) {
    return instance.post<ForgotParamsType, AxiosResponse<ForgotResponseType>>(
      'auth/forgot',
      data,
    );
  },
  newPassword(data: NewPasswordType) {
    return instance.post<NewPasswordType, AxiosResponse<NewPasswordResponseType>>(
      'auth/set-new-password',
      data,
    );
  },
};
