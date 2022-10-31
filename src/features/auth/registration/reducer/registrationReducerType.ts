import { initialState, setRegistered } from './registrationReducer';

// initialState type
export type InitialStateRegistration = typeof initialState;

// action type
export type SetRegisteredReducerType = ReturnType<typeof setRegistered>;
