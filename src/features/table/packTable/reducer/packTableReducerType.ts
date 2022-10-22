import { initialStatePackTable, setPackDateAC } from './packTableReducer';

// initialState type
export type InitialStatePackTable = typeof initialStatePackTable;

// action
export type SetPackDateACType = ReturnType<typeof setPackDateAC>;
export type StatePackReducerActionsType = SetPackDateACType;
