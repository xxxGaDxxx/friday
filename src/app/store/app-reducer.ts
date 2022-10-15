import { loginAPI } from '../../features/auth/login/api/loginAPI';

import { AppThunk } from './store';
import { ActionsAppType, InitialStateAppType, RequestStatusType } from './types/appTypes';

export const initialStateApp = {
  status: 'loading' as RequestStatusType,
  error: null as string | null,
  isInitialized: false,
};

export const appReducer = (
  action: ActionsAppType,
  state: InitialStateAppType = initialStateApp,
): InitialStateAppType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.status };
    case 'APP/SET-ERROR':
      return { ...state, error: action.error };
    case 'APP/SET-INITIALIZED':
      return { ...state, isInitialized: action.value };
    default:
      return state;
  }
};

// action

export const setAppStatusAC = (status: RequestStatusType) =>
  ({
    type: 'APP/SET-STATUS',
    status,
  } as const);

export const setAppErrorAC = (error: string | null) =>
  ({
    type: 'APP/SET-ERROR',
    error,
  } as const);

export const setIsInitializedAC = (value: boolean) =>
  ({
    type: 'APP/SET-INITIALIZED',
    value,
  } as const);

// thunk
export const initializeAppTC = (): AppThunk => () => {
  loginAPI.me().then(res => console.log(res));
};
