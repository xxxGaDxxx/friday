import { errorUtils } from '../../common/utils/errorUtils';
import { loginAPI } from '../../features/auth/login/api/loginAPI';
import { setIsLoggedInAC } from '../../features/auth/login/reducer/loginReducer';

import { AppThunk } from './store';
import { ActionsAppType, InitialStateAppType, RequestStatusType } from './types/appTypes';

export const initialStateApp: InitialStateAppType = {
  status: 'idle',
  error: null,
  isInitialized: false,
};

export const appReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateAppType = initialStateApp,
  action: ActionsAppType,
): InitialStateAppType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.payload.status };
    case 'APP/SET-ERROR':
      return { ...state, error: action.payload.error };
    case 'APP/SET-INITIALIZED':
      return { ...state, isInitialized: action.payload.value };
    default:
      return state;
  }
};

// action

export const setAppStatusAC = (status: RequestStatusType) =>
  ({
    type: 'APP/SET-STATUS',
    payload: { status },
  } as const);

export const setAppErrorAC = (error: string | null) =>
  ({
    type: 'APP/SET-ERROR',
    payload: { error },
  } as const);

export const setIsInitializedAC = (value: boolean) =>
  ({
    type: 'APP/SET-INITIALIZED',
    payload: { value },
  } as const);

// thunk
export const initializeAppTC = (): AppThunk => dispatch => {
  dispatch(setAppStatusAC('loading'));
  dispatch(setAppErrorAC(null));
  loginAPI
    .me()
    .then(res => {
      console.log(res);
      dispatch(setIsLoggedInAC(true));
      dispatch(setAppStatusAC('succeeded'));
      // dispatch(profile.user(res.data))
    })

    .catch(err => {
      errorUtils(err, dispatch);
    })
    .finally(() => {
      dispatch(setIsInitializedAC(true));
    });
};
