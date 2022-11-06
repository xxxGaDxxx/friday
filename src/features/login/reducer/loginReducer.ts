import { AxiosError } from 'axios';

import { authAPI } from '../../../api/authAPI';
import { errorUtils } from '../../../common/utils/errorUtils';
import { setAppStatusAC } from '../../../store/app-reducer';
import { AppThunk } from '../../../store/store';
import { setUserDataAC } from '../../profile/reducer/profileReducer';
import { LoginParamsType } from '../types/LoginType';

import { InitialStateLoginType, LoginReducerActionsType } from './loginReducerType';

export const initialStateLogin = {
  isLoggedIn: false,
};

export const loginReducer = (
  state = initialStateLogin,
  action: LoginReducerActionsType,
): InitialStateLoginType => {
  switch (action.type) {
    case 'LOGIN/SET-IS-LOGGED-IN':
      return { ...state, isLoggedIn: action.payload.value };
    default:
      return state;
  }
};

// action
export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'LOGIN/SET-IS-LOGGED-IN', payload: { value } } as const);

// thunk
export const loginTC =
  (params: LoginParamsType): AppThunk =>
  async dispatch => {
    try {
      dispatch(setAppStatusAC('loading'));

      const { data } = await authAPI.login(params);

      dispatch(setIsLoggedInAC(true));
      dispatch(setUserDataAC(data));
      dispatch(setAppStatusAC('succeeded'));
    } catch (err) {
      errorUtils(err as AxiosError, dispatch);
    }
  };
