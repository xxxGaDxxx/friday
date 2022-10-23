import { AxiosError } from 'axios';

import { authAPI, userAPI } from '../../../api/authAPI';
import { UserResponseType } from '../../../api/types/apiType';
import { setAppStatusAC } from '../../../app/store/app-reducer';
import { AppThunk } from '../../../app/store/store';
import { errorUtils } from '../../../common/utils/errorUtils';
import { setIsLoggedInAC } from '../../auth/login/reducer/loginReducer';
import { UserUpdateParamsType } from '../../auth/login/types/LoginType';

import { InitialStateType, ProfileReducerActionsType } from './profileReducerType';

export const initialStateProfile = {
  avatar: '',
  name: '',
  email: '',
  _id: '',
};

export const profileReducer = (
  state = initialStateProfile,
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
