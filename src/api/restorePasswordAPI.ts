import { instance } from './config';
import {
  RestoreForgottenPasswordParamsType,
  RestoreForgottenPasswordResponseType,
  SetNewPasswordResponseType,
  SetNewPasswordType,
} from './types/apiType';

export const restorePasswordAPI = {
  restoreForgottenPassword(params: RestoreForgottenPasswordParamsType) {
    return instance.post<RestoreForgottenPasswordResponseType>('auth/forgot', params);
  },

  setNewPassword(params: SetNewPasswordType) {
    return instance.post<SetNewPasswordResponseType>('auth/set-new-password', params);
  },
};
