import { loginAPI } from '../api/loginAPI';
import { LoginParamsType } from '../types/LoginType';

const initialState = {
  isLoggedIn: false,
};

type InitialStateType = typeof initialState;
export const loginReducer = (
  action: any,
  state: InitialStateType = initialState,
): any => {
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
export const loginTC = (data: LoginParamsType) => () => {
  loginAPI.login(data).then(res => console.log(res));
};
