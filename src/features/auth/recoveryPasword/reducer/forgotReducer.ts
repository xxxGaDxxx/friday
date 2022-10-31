import { restorePasswordAPI } from '../../../../api/restorePasswordAPI';
import {
  RestoreForgottenPasswordParamsType,
  SetNewPasswordType,
} from '../../../../api/types/apiType';
import { errorUtils } from '../../../../common/utils/errorUtils';
import { setAppStatusAC } from '../../../../store/app-reducer';
import { AppThunk } from '../../../../store/store';

import { ForgotReducerActionsType, InitialStateForgotType } from './forgotReducerType';

export const initialStateForgot = {
  email: '',
  success: false,
  infoNewPassword: '',
};

export const forgotReducer = (
  state = initialStateForgot,
  action: ForgotReducerActionsType,
): InitialStateForgotType => {
  switch (action.type) {
    case 'FORGOT/SET-IS-EMAIL':
      return { ...state, email: action.payload.email };
    case 'FORGOT/SET-IS-SUCCESS':
      return { ...state, success: action.payload.value };
    case 'FORGOT/SET-IS-INFO-NEW-PASSWORD':
      return { ...state, infoNewPassword: action.payload.info };
    default:
      return state;
  }
};

// action
export const setEmailAC = (email: string) =>
  ({ type: 'FORGOT/SET-IS-EMAIL', payload: { email } } as const);

export const setIsSuccessAC = (value: boolean) =>
  ({ type: 'FORGOT/SET-IS-SUCCESS', payload: { value } } as const);

export const setIsInfoNewPasswordAC = (info: string) =>
  ({ type: 'FORGOT/SET-IS-INFO-NEW-PASSWORD', payload: { info } } as const);

// thunk
export const forgotPasswordTC =
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

        dispatch(setIsInfoNewPasswordAC(info));
        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };
