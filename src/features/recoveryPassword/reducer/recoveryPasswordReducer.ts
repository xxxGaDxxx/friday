import { restorePasswordAPI } from '../../../api/restorePasswordAPI';
import { RestoreForgottenPasswordParamsType, SetNewPasswordType } from '../../../api/types/apiType';
import { errorUtils } from '../../../common/utils/errorUtils';
import { setAppStatusAC } from '../../../store/app-reducer';
import { AppThunk } from '../../../store/store';

import {
  RecoveryPasswordActionsType,
  InitialStateRecoveryPasswordType,
} from './recoveryReducerType';

export const initialStateRecoveryPassword = {
  email: '',
  success: false,
  info: '',
};

export const recoveryPasswordReducer = (
  state = initialStateRecoveryPassword,
  action: RecoveryPasswordActionsType,
): InitialStateRecoveryPasswordType => {
  switch (action.type) {
    case 'RECOVERY/SET-IS-EMAIL':
      return { ...state, email: action.payload.email };
    case 'RECOVERY/SET-IS-SUCCESS':
      return { ...state, success: action.payload.value };
    case 'RECOVERY/SET-INFO':
      return { ...state, info: action.payload.info };
    default:
      return state;
  }
};

// action
export const setEmailAC = (email: string) =>
  ({ type: 'RECOVERY/SET-IS-EMAIL', payload: { email } } as const);

export const setIsSuccessAC = (value: boolean) =>
  ({ type: 'RECOVERY/SET-IS-SUCCESS', payload: { value } } as const);

export const setInfoAC = (info: string) =>
  ({ type: 'RECOVERY/SET-INFO', payload: { info } } as const);

// thunk
export const recoveryPasswordTC =
  (data: RestoreForgottenPasswordParamsType): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));

    restorePasswordAPI
      .restoreForgottenPassword(data)

      .then(res => {
        dispatch(setEmailAC(data.email));
        dispatch(setIsSuccessAC(res.data.success));
        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };

export const newPasswordTC =
  (data: SetNewPasswordType): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));

    restorePasswordAPI
      .setNewPassword(data)

      .then(res => {
        const info = res.data.info ? res.data.info : '';

        dispatch(setInfoAC(info));
        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };
