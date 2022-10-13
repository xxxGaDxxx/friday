import { TypedUseSelectorHook, useSelector } from 'react-redux';
// eslint-disable-next-line camelcase
import { Action, applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { appReducer } from './app-reducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  Action
>;

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

// @ts-ignore
window.store = store;
