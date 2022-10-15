import {
  initialStateApp,
  setAppErrorAC,
  setAppStatusAC,
  setIsInitializedAC,
} from '../app-reducer';

// initialStateApp type
export type InitialStateAppType = typeof initialStateApp;

// action type
export type SetAppStatusACType = ReturnType<typeof setAppStatusAC>;
export type SetAppErrorACType = ReturnType<typeof setAppErrorAC>;
export type SetIsInitializedACType = ReturnType<typeof setIsInitializedAC>;

export type ActionsAppType =
  | SetAppStatusACType
  | SetAppErrorACType
  | SetIsInitializedACType;

// status type
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
