import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { loginReducer } from '../../features/auth/login/reducer/loginReducer';
import { LoginReducerActionsType } from '../../features/auth/login/reducer/loginReducerType';
import { forgotReducer } from '../../features/auth/recoveryPasword/reducer/forgotReducer';
import { ForgotReducerActionsType } from '../../features/auth/recoveryPasword/reducer/forgotReducerType';
import { registrationReducer } from '../../features/auth/registration/reducer/registrationReducer';
import { SetRegisteredType } from '../../features/auth/registration/reducer/registrationReducerType';
import { cardsTableReducer } from '../../features/cards/reducer/cardTableReducer';
import { StateCardsReducerActionsType } from '../../features/cards/reducer/cardTableReducerType';
import { packTableReducer } from '../../features/packs/reducer/packTableReducer';
import { StatePackReducerActionsType } from '../../features/packs/reducer/packTableReducerType';
import { profileReducer } from '../../features/profile/reducer/profileReducer';
import { ProfileReducerActionsType } from '../../features/profile/reducer/profileReducerType';

import { appReducer } from './app-reducer';
import { AppReducerActionsType } from './types/appReducerTypes';

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  profile: profileReducer,
  forgot: forgotReducer,
  registration: registrationReducer,
  pack: packTableReducer,
  card: cardsTableReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppActionsType =
  | AppReducerActionsType
  | ProfileReducerActionsType
  | LoginReducerActionsType
  | ForgotReducerActionsType
  | SetRegisteredType
  | StatePackReducerActionsType
  | StateCardsReducerActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppActionsType
>;

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AppActionsType>;

// @ts-ignore
window.store = store;
