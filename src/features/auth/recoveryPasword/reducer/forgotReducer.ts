import { forgotPasswordAPI } from '../../../../api/forgotPasswordAPI';
import { ForgotParamsType, NewPasswordType } from '../../../../api/types/apiType';
import { setAppStatusAC } from '../../../../app/store/app-reducer';
import { AppThunk } from '../../../../app/store/store';
import { errorUtils } from '../../../../common/utils/errorUtils';

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
  (data: ForgotParamsType): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    forgotPasswordAPI
      .forgot(data)
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
  (data: NewPasswordType): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    forgotPasswordAPI
      .newPassword(data)
      .then(res => {
        const info = res.data.info ? res.data.info : '';

        dispatch(setIsInfoNewPasswordAC(info));
        dispatch(setAppStatusAC('succeeded'));
      })
      .catch(err => {
        errorUtils(err, dispatch);
      });
  };
