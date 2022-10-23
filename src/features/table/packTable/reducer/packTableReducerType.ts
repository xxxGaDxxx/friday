import { initialStatePackTable, setPackDateAC, setPacksPerPageAC } from './packTableReducer';

// initialState type
export type InitialStatePackTable = typeof initialStatePackTable;

// action
export type SetPackDateACType = ReturnType<typeof setPackDateAC>;
export type SetPackPerPageACType = ReturnType<typeof setPacksPerPageAC>;
export type StatePackReducerActionsType = SetPackDateACType | SetPackPerPageACType;
