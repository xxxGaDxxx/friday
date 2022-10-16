import { authAPI } from '../../../../api/authAPI';
import { setAppStatusAC } from '../../../../app/store/app-reducer';
import { AppThunk } from '../../../../app/store/store';
import { errorUtils } from '../../../../common/utils/errorUtils';
import { setUserEmailAC, setUserNameAC } from '../../../profile/profile-reducer';
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
      return { ...state, isLoggedIn: action.value };
    default:
      return state;
  }
};

// action
export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'LOGIN/SET-IS-LOGGED-IN', value } as const);

// thunk
export const loginTC =
  (data: LoginParamsType): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    authAPI
      .login(data)
      .then(res => {
        dispatch(setIsLoggedInAC(true));
        dispatch(setUserNameAC(res.data.name));
        dispatch(setUserEmailAC(res.data.email));
        dispatch(setAppStatusAC('succeeded'));
      })
      .catch(err => {
        errorUtils(err, dispatch);
      });
  };
