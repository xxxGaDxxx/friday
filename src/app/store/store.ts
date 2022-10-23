import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { loginReducer } from '../../features/auth/login/reducer/loginReducer';
import { LoginReducerActionsType } from '../../features/auth/login/reducer/loginReducerType';
import { forgotReducer } from '../../features/auth/password/recoveryPasword/reducer/forgotReducer';
import { ForgotReducerActionsType } from '../../features/auth/password/recoveryPasword/reducer/forgotReducerType';
import { registrationReducer } from '../../features/auth/registration/reducer/registrationReducer';
import { SetRegisteredType } from '../../features/auth/registration/reducer/registrationReducerType';
import { profileReducer } from '../../features/profile/reducer/profileReducer';
import { ProfileReducerActionsType } from '../../features/profile/reducer/profileReducerType';
import { packTableReducer } from '../../features/table/packTable/reducer/packTableReducer';
import { StatePackReducerActionsType } from '../../features/table/packTable/reducer/packTableReducerType';

import { appReducer } from './app-reducer';
import { AppReducerActionsType } from './types/appReducerTypes';

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  profile: profileReducer,
  forgot: forgotReducer,
  registration: registrationReducer,
  pack: packTableReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export const useAppDispatch: () => AppDispatchType = useDispatch;

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppActionsType =
  | AppReducerActionsType
  | ProfileReducerActionsType
  | LoginReducerActionsType
  | ForgotReducerActionsType
  | SetRegisteredType
  | StatePackReducerActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppActionsType
>;

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AppActionsType>;

// @ts-ignore
window.store = store;
