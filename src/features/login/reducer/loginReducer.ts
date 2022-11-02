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
  (data: LoginParamsType): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));

    authAPI
      .login(data)

      .then(res => {
        dispatch(setIsLoggedInAC(true));
        dispatch(setUserDataAC(res.data));
        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };
