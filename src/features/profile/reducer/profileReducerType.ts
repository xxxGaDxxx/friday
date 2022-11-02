// initialState type

import { initialStateProfile, setUserDataAC } from './profileReducer';

export type InitialStateType = typeof initialStateProfile;

// action
export type setUserNameACType = ReturnType<typeof setUserDataAC>;
export type ProfileReducerActionsType = setUserNameACType;
