import { AxiosError } from 'axios';

import { authAPI, userAPI } from '../../api/authAPI';
import { UserResponseType } from '../../api/types/apiType';
import { setAppStatusAC } from '../../app/store/app-reducer';
import { AppThunk } from '../../app/store/store';
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
    case 'PROFILE/SET-USER-DATE':
      return {
        ...state,
        ...action.payload.userDate,
      };
    default:
      return state;
  }
};

export const setUserDateAC = (userDate: UserResponseType) =>
  ({
    type: 'PROFILE/SET-USER-DATE',
    payload: {
      userDate,
    },
  } as const);
export const setUserEmailAC = (userEmail: string) =>
  ({
    type: 'PROFILE/SET-USER-EMAIL',
    payload: { userEmail },
  } as const);

export const updateUserNameTC =
  (data: UserUpdateParamsType): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    userAPI
      .updateUser(data)
      .then(res => {
        dispatch(setUserDateAC(res.data.updatedUser));
        dispatch(setAppStatusAC('succeeded'));
      })
      .catch(err => {
        errorUtils(err, dispatch);
      });
  };
export const logOutUserTC = (): AppThunk => dispatch => {
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
type setUserNameACType = ReturnType<typeof setUserDateAC>;
export type ProfileReducerActionsType = setUserNameACType | setUserEmailACType;
