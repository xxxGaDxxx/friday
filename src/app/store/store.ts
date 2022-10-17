import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { loginReducer } from '../../features/auth/login/reducer/loginReducer';
import { LoginReducerActionsType } from '../../features/auth/login/reducer/loginReducerType';
import { forgotReducer } from '../../features/auth/password/recoveryPasword/reducer/forgotReducer';
import { ForgotReducerActionsType } from '../../features/auth/password/recoveryPasword/reducer/forgotReducerType';
import {
  profileReducer,
  ProfileReducerActionsType,
} from '../../features/profile/profile-reducer';

import { appReducer } from './app-reducer';
import { AppReducerActionsType } from './types/appReducerTypes';

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  profile: profileReducer,
  forgot: forgotReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppActionsType =
  | AppReducerActionsType
  | ProfileReducerActionsType
  | LoginReducerActionsType
  | ForgotReducerActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppActionsType
>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>;

// @ts-ignore
window.store = store;
