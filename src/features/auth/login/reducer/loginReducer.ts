import { Dispatch } from 'redux';

import { setAppStatusAC } from '../../../../app/store/app-reducer';
import { AppThunk } from '../../../../app/store/store';
import { errorUtils } from '../../../../common/utils/errorUtils';
import { loginAPI } from '../api/loginAPI';
import { LoginParamsType } from '../types/LoginType';

const initialState = {
  isLoggedIn: false,
};

type InitialStateType = typeof initialState;
export const loginReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case 'login/SET-IS-LOGGED-IN':
      return { ...state, isLoggedIn: action.value };
    default:
      return state;
  }
};

// action
export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'login/SET-IS-LOGGED-IN', value } as const);

// thunk
export const loginTC =
  (data: LoginParamsType): AppThunk =>
  (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'));
    loginAPI
      .login(data)
      .then(res => console.log(res))
      .catch(err => {
        errorUtils(err, dispatch);
      })
      .finally();
  };
