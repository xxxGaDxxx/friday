import { AxiosError } from 'axios';

import { authAPI } from '../../../api/authAPI';
import { RegistrationParamsType } from '../../../api/types/apiType';
import { errorUtils } from '../../../common/utils/errorUtils';
import { setAppStatusAC } from '../../../store/app-reducer';
import { AppThunk } from '../../../store/store';

import { InitialStateRegistration, SetRegisteredReducerType } from './registrationReducerType';

export const initialState = {
  isRegistered: false,
};

export const registrationReducer = (
  state: InitialStateRegistration = initialState,
  action: SetRegisteredReducerType,
): InitialStateRegistration => {
  switch (action.type) {
    case 'REGISTRATION/SET-REGISTERED':
      return { ...state, isRegistered: action.value };
    default:
      return state;
  }
};

// action
export const setRegistered = (value: boolean) =>
  ({ type: 'REGISTRATION/SET-REGISTERED', value } as const);

// thunk
export const registrationTC =
  (data: RegistrationParamsType): AppThunk =>
  async dispatch => {
    try {
      dispatch(setAppStatusAC('loading'));
      await authAPI.registration(data);

      dispatch(setAppStatusAC('succeeded'));
      dispatch(setRegistered(true));
    } catch (err) {
      const error = err as AxiosError;

      errorUtils(error, dispatch);
    }
  };
