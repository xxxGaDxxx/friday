// initialState type

import { initialStateProfile, setUserDateAC } from './profileReducer';

export type InitialStateType = typeof initialStateProfile;

// action
export type setUserNameACType = ReturnType<typeof setUserDateAC>;
export type ProfileReducerActionsType = setUserNameACType;
