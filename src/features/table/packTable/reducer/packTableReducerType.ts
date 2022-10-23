import {
  initialStatePackTable,
  setPackDateAC,
  setPacksPerPageAC,
  setSelectedPageAC,
} from './packTableReducer';

// initialState type
export type InitialStatePackTable = typeof initialStatePackTable;

// action
export type SetPackDateACType = ReturnType<typeof setPackDateAC>;
export type SetPackPerPageACType = ReturnType<typeof setPacksPerPageAC>;
export type SetSelectedPageACType = ReturnType<typeof setSelectedPageAC>;
export type StatePackReducerActionsType =
  | SetPackDateACType
  | SetPackPerPageACType
  | SetSelectedPageACType;
