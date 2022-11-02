import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { cardsReducer } from '../features/cards/reducer/cardsReducer';
import { StateCardsReducerActionsType } from '../features/cards/reducer/cardsReducerType';
import { StateCardLearnReducerActionsType } from '../features/learn/reducer/cardLearnReducerType';
import { cardLearnReducer } from '../features/learn/reducer/learnReducer';
import { loginReducer } from '../features/login/reducer/loginReducer';
import { LoginReducerActionsType } from '../features/login/reducer/loginReducerType';
import { packsReducer } from '../features/packs/reducer/packsReducer';
import { PacksReducerActionsType } from '../features/packs/reducer/packTableReducerType';
import { profileReducer } from '../features/profile/reducer/profileReducer';
import { ProfileReducerActionsType } from '../features/profile/reducer/profileReducerType';
import { recoveryPasswordReducer } from '../features/recoveryPassword/reducer/recoveryPasswordReducer';
import { RecoveryPasswordActionsType } from '../features/recoveryPassword/reducer/recoveryReducerType';
import { registrationReducer } from '../features/registration/reducer/registrationReducer';
import { SetRegisteredReducerType } from '../features/registration/reducer/registrationReducerType';

import { appReducer } from './app-reducer';
import { AppReducerActionsType } from './types/appReducerTypes';

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  profile: profileReducer,
  recovery: recoveryPasswordReducer,
  registration: registrationReducer,
  pack: packsReducer,
  card: cardsReducer,
  learn: cardLearnReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppActionsType =
  | AppReducerActionsType
  | ProfileReducerActionsType
  | LoginReducerActionsType
  | RecoveryPasswordActionsType
  | SetRegisteredReducerType
  | PacksReducerActionsType
  | StateCardsReducerActionsType
  | StateCardLearnReducerActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppActionsType
>;

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AppActionsType>;

// @ts-ignore
window.store = store;
