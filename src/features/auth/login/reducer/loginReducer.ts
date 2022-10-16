import { Dispatch } from 'redux';

import { setAppStatusAC } from '../../../../app/store/app-reducer';
import { AppThunk } from '../../../../app/store/store';
import { errorUtils } from '../../../../common/utils/errorUtils';
import { setUserEmailAC, setUserNameAC } from '../../../profile/profile-reducer';
import { loginAPI } from '../api/loginAPI';
import { LoginParamsType } from '../types/LoginType';

const initialState = {
  isLoggedIn: false,
};

export const loginReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: LoginReducerActionsType,
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
      .then(res => {
        dispatch(setIsLoggedInAC(true));
        dispatch(setUserNameAC(res.data.name));
        dispatch(setUserEmailAC(res.data.email));
        dispatch(setAppStatusAC('succeeded'));
      })
      .catch(err => {
        errorUtils(err, dispatch);
      })
      .finally();
  };

type InitialStateType = typeof initialState;
type setIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>;
export type LoginReducerActionsType = setIsLoggedInACType;
