import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  Action,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { loginReducer } from '../../features/auth/login/reducer/loginReducer';

import { appReducer } from './app-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  Action
>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, Action>;

// @ts-ignore
window.store = store;
