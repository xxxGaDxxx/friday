// initialState type

import { initialStateProfile, setAvatarAC, setUserDataAC, setUserNameAC } from './profileReducer';

export type InitialStateType = typeof initialStateProfile;

// action
export type setUserDateACType = ReturnType<typeof setUserDataAC>;
export type setAvatarACType = ReturnType<typeof setAvatarAC>;
export type setUserNameACType = ReturnType<typeof setUserNameAC>;

export type ProfileReducerActionsType = setUserNameACType | setAvatarACType | setUserDateACType;
