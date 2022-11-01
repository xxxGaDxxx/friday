import { AxiosError } from 'axios';

import { authAPI, userAPI } from '../../../api/authAPI';
import { UserResponseType } from '../../../api/types/apiType';
import { errorUtils } from '../../../common/utils/errorUtils';
import { setAppStatusAC } from '../../../store/app-reducer';
import { AppThunk } from '../../../store/store';
import { setIsLoggedInAC } from '../../login/reducer/loginReducer';
import { UserUpdateParamsType } from '../../login/types/LoginType';

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
    case 'PROFILE/SET-USER-DATA':
      return {
        ...state,
        ...action.payload.userDate,
      };
    default:
      return state;
  }
};

// actions
export const setUserDataAC = (userData: UserResponseType) =>
  ({ type: 'PROFILE/SET-USER-DATA', payload: { userDate: userData } } as const);

// thunk
export const updateUserNameTC =
  (data: UserUpdateParamsType): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));

    userAPI
      .updateUser(data)

      .then(res => {
        dispatch(setUserDataAC(res.data.updatedUser));
        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };

export const logOutTC = (): AppThunk => dispatch => {
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
