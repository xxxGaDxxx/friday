import { forgotPasswordAPI } from '../../../../../api/forgotPasswordAPI';
import { ForgotParamsType } from '../../../../../api/types/apiType';
import { setAppStatusAC } from '../../../../../app/store/app-reducer';
import { AppThunk } from '../../../../../app/store/store';
import { errorUtils } from '../../../../../common/utils/errorUtils';

import { ForgotReducerActionsType, InitialStateForgotType } from './forgotReducerType';

export const initialStateForgot = {
  email: '',
  success: false,
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
    default:
      return state;
  }
};

// action
export const setEmailAC = (email: string) =>
  ({ type: 'FORGOT/SET-IS-EMAIL', payload: { email } } as const);

export const setIsSuccessAC = (value: boolean) =>
  ({ type: 'FORGOT/SET-IS-SUCCESS', payload: { value } } as const);

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
