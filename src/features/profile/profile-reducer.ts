import { AxiosError } from 'axios';

import { authAPI, userAPI } from '../../api/authAPI';
import { setAppStatusAC } from '../../app/store/app-reducer';
import { AppDispatch, AppThunk } from '../../app/store/store';
import { errorUtils } from '../../common/utils/errorUtils';
import { setIsLoggedInAC } from '../auth/login/reducer/loginReducer';
import { UserUpdateParamsType } from '../auth/login/types/LoginType';

const initialState: InitialStateType = {
  avatar: '',
  name: '',
  email: '',
};

export const profileReducer = (
  state = initialState,
  action: ProfileReducerActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'PROFILE/SET-USER-NAME':
      return {
        ...state,
        name: action.payload.userName,
      };
    case 'PROFILE/SET-USER-EMAIL':
      return {
        ...state,
        email: action.payload.userEmail,
      };
    default:
      return state;
  }
};

export const setUserNameAC = (userName: string) =>
  ({
    type: 'PROFILE/SET-USER-NAME',
    payload: { userName },
  } as const);
export const setUserEmailAC = (userEmail: string) =>
  ({
    type: 'PROFILE/SET-USER-EMAIL',
    payload: { userEmail },
  } as const);

export const updateUserNameTC =
  (data: UserUpdateParamsType): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC('loading'));
    userAPI
      .updateUser(data)
      .then(res => {
        dispatch(setUserNameAC(res.data.updatedUser.name));
        dispatch(setAppStatusAC('succeeded'));
      })
      .catch(err => {
        errorUtils(err, dispatch);
      });
  };
export const logOutUserTC = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(setAppStatusAC('loading'));
  authAPI
    .logout()
    .then(() => {
      dispatch(setIsLoggedInAC(false));
      dispatch(setAppStatusAC('succeeded'));
    })
    .catch((err: Error | AxiosError<{ error: string }, any>) => {
      errorUtils(err, dispatch);
    });
};

type InitialStateType = {
  avatar?: string;
  name: string;
  email?: string;
};
type setUserEmailACType = ReturnType<typeof setUserEmailAC>;
type setUserNameACType = ReturnType<typeof setUserNameAC>;
export type ProfileReducerActionsType = setUserNameACType | setUserEmailACType;
